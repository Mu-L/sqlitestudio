#include "editorwindow.h"
#include "dialogs/manualcommitpendingtxdialog.h"
#include "dialogs/manualcommitwalmodedialog.h"
#include "formview.h"
#include "statusfield.h"
#include "ui_editorwindow.h"
#include "uiutils.h"
#include "datagrid/sqlquerymodel.h"
#include "iconmanager.h"
#include "services/notifymanager.h"
#include "dbtree/dbtree.h"
#include "datagrid/sqlqueryitem.h"
#include "datagrid/sqlqueryview.h"
#include "mainwindow.h"
#include "mdiarea.h"
#include "uiconfig.h"
#include "services/config.h"
#include "parser/lexer.h"
#include "common/utils_sql.h"
#include "parser/parser.h"
#include "dbobjectdialogs.h"
#include "dialogs/exportdialog.h"
#include "themetuner.h"
#include "dialogs/bindparamsdialog.h"
#include "common/bindparam.h"
#include "common/dbcombobox.h"
#include "services/dbmanager.h"
#include <QComboBox>
#include <QDebug>
#include <QStringListModel>
#include <QActionGroup>
#include <QMessageBox>
#include <QFileDialog>
#include <QLocale>
#include <QToolButton>

CFG_KEYS_DEFINE(EditorWindow)

EditorWindow::EditorWindow(QWidget *parent) :
    MdiChild(parent),
    ui(new Ui::EditorWindow)
{
    ui->setupUi(this);
    init();
}

EditorWindow::EditorWindow(const EditorWindow& editor) :
    MdiChild(editor.parentWidget()),
    ui(new Ui::EditorWindow)
{
    ui->setupUi(this);
    init();
    ui->sqlEdit->setAutoCompletion(false);
    ui->sqlEdit->setPlainText(editor.ui->sqlEdit->toPlainText());
    ui->sqlEdit->setAutoCompletion(true);
}

EditorWindow::~EditorWindow()
{
    if (txDb)
    {
        // Closed despite uncommitted transaction (confirmed in dialog by user) - rolling back transaction to avoid leaving the database in inconsistent state
        txDb->closeQuiet();
        delete txDb;
    }

    delete ui;
}

void EditorWindow::staticInit()
{
    qRegisterMetaType<EditorWindow>("EditorWindow");
}

void EditorWindow::insertAction(ExtActionPrototype* action, EditorWindow::ToolBar toolbar)
{
    return ExtActionContainer::insertAction<EditorWindow>(action, toolbar);
}

void EditorWindow::insertAction(ExtActionPrototype* action)
{
    return ExtActionContainer::insertAction<EditorWindow>(action, -1);
}

void EditorWindow::insertActionBefore(ExtActionPrototype* action, EditorWindow::Action beforeAction, EditorWindow::ToolBar toolbar)
{
    return ExtActionContainer::insertActionBefore<EditorWindow>(action, beforeAction, toolbar);
}

void EditorWindow::insertActionAfter(ExtActionPrototype* action, EditorWindow::Action afterAction, EditorWindow::ToolBar toolbar)
{
    return ExtActionContainer::insertActionAfter<EditorWindow>(action, afterAction, toolbar);
}

void EditorWindow::removeAction(ExtActionPrototype* action, EditorWindow::ToolBar toolbar)
{
    ExtActionContainer::removeAction<EditorWindow>(action, toolbar);
}

void EditorWindow::removeAction(ExtActionPrototype* action)
{
    ExtActionContainer::removeAction<EditorWindow>(action, -1);
}

void EditorWindow::init()
{
    setFocusProxy(ui->sqlEdit);
    updateResultsDisplayMode();

    THEME_TUNER->manageCompactLayout({
                                         ui->query,
                                         ui->results,
                                         ui->history
                                     });

    resultsModel = new SqlQueryModel(this);
    ui->dataView->init(resultsModel);

    createDbCombo();
    initActions();
    updateShortcutTips();
    setupSqlHistoryMenu();

    Db* treeSelectedDb = DBTREE->getSelectedOpenDb();
    if (treeSelectedDb)
        dbCombo->setCurrentDb(treeSelectedDb);

    Db* currentDb = getCurrentDb();
    resultsModel->setDb(currentDb);
    ui->sqlEdit->setDb(currentDb);

    connect(CFG_UI.General.SqlEditorCurrQueryHighlight, SIGNAL(changed(QVariant)), this, SLOT(queryHighlightingConfigChanged(QVariant)));
    if (CFG_UI.General.SqlEditorCurrQueryHighlight.get())
        ui->sqlEdit->setCurrentQueryHighlighting(true);

    MAINWINDOW->installToolbarSizeWheelHandler(ui->toolBar);
    MAINWINDOW->installToolbarSizeWheelHandler(ui->historyToolBar);
    MAINWINDOW->installToolbarSizeWheelHandler(ui->dataView->getToolBar(DataView::TOOLBAR_GRID));
    MAINWINDOW->installToolbarSizeWheelHandler(ui->dataView->getToolBar(DataView::TOOLBAR_FORM));

    connect(ui->sqlEdit, SIGNAL(textChanged()), this, SLOT(checkTextChangedForSession()));
    connect(ui->sqlEdit, SIGNAL(fileLoaded(QString)), this, SLOT(renameForFile(QString)));
    connect(ui->sqlEdit, SIGNAL(fileSaved(QString)), this, SLOT(renameForFile(QString)));

    connect(resultsModel, SIGNAL(executionSuccessful()), this, SLOT(executionSuccessful()));
    connect(resultsModel, SIGNAL(executionFailed(QString)), this, SLOT(executionFailed(QString)));
    connect(resultsModel, SIGNAL(storeExecutionInHistory()), this, SLOT(storeExecutionInHistory()));

    for (QAction* extraAct : getNonToolbarExtraActions())
        ui->sqlEdit->addContextMenuExtraAction(extraAct);

    // SQL history list
    ui->historyList->setModel(CFG->getSqlHistoryModel());
    ui->historyList->hideColumn(0);
    ui->historyList->resizeColumnToContents(1);
    connect(ui->historyList->selectionModel(), SIGNAL(currentRowChanged(QModelIndex,QModelIndex)),
            this, SLOT(historyEntrySelected(QModelIndex,QModelIndex)));
    connect(ui->historyList, SIGNAL(doubleClicked(QModelIndex)), this, SLOT(historyEntryActivated(QModelIndex)));
    connect(ui->historyList, &QWidget::customContextMenuRequested, this, &EditorWindow::sqlHistoryContextMenuRequested);

    // Manual/Auto commit
    setAutoCommit(CFG_UI.General.SqlEditorAutoCommit.get(), false);
    connect(resultsModel, &SqlQueryModel::aboutToCommit, this, &EditorWindow::openManualTxForDataCommit);
    connect(DBLIST, &DbManager::dbAboutToBeDisconnected, this, &EditorWindow::handleDbAboutToDisconnect);
    connect(ui->dataView, &DataView::commitStatusChanged, this, &EditorWindow::updateManualCommitStatus);

    updateState();
    updateManualCommitIconsAndLabels(!currentlyAutoCommit);
    updateManualCommitStatus();
}

Icon* EditorWindow::getIconNameForMdiWindow()
{
    return ICONS.OPEN_SQL_EDITOR;
}

QString EditorWindow::getTitleForMdiWindow()
{
    QString loadedFile = ui->sqlEdit->getLoadedFile();
    if (!loadedFile.isEmpty())
        return QFileInfo(loadedFile).fileName();

    QStringList existingNames = MainWindow::getInstance()->getMdiArea()->getWindowTitles();
    QString title = tr("SQL editor %1").arg(sqlEditorNum++);
    while (existingNames.contains(title))
        title = tr("SQL editor %1").arg(sqlEditorNum++);

    return title;
}

QSize EditorWindow::sizeHint() const
{
    return QSize(500, 400);
}

QAction* EditorWindow::getAction(EditorWindow::Action action)
{
    return ExtActionContainer::getAction(action);
}

QString EditorWindow::getQueryToExecute(QueryExecMode querySelectionMode)
{
    QString sql;
    if (ui->sqlEdit->textCursor().hasSelection())
    {
        sql = ui->sqlEdit->textCursor().selectedText();
        fixTextCursorSelectedText(sql);
    }
    else if (querySelectionMode == ALL)
    {
        sql = ui->sqlEdit->toPlainText();
    }
    else if (CFG_UI.General.ExecuteCurrentQueryOnly.get() || querySelectionMode == SINGLE)
    {
        ui->sqlEdit->saveSelection();
        selectCurrentQuery(true);
        sql = ui->sqlEdit->textCursor().selectedText();
        ui->sqlEdit->restoreSelection();
        fixTextCursorSelectedText(sql);
    }
    else
    {
        sql = ui->sqlEdit->toPlainText();
    }
    return sql;
}

bool EditorWindow::setCurrentDb(Db *db)
{
    dbCombo->setCurrentDb(db);
    return dbCombo->currentIndex() > -1;
}

void EditorWindow::setContents(const QString &sql)
{
    settingSqlContents = true;
    ui->sqlEdit->setPlainText(sql);
    settingSqlContents = false;
}

QString EditorWindow::getContents() const
{
    return ui->sqlEdit->toPlainText();
}

void EditorWindow::execute()
{
    execQuery();
}

QToolBar* EditorWindow::getToolBar(int toolbar) const
{
    Q_UNUSED(toolbar);
    return ui->toolBar;
}

SqlEditor* EditorWindow::getEditor() const
{
    return ui->sqlEdit;
}

QVariant EditorWindow::saveSession()
{
    QHash<QString,QVariant> sessionValue;
    sessionValue["query"] = ui->sqlEdit->toPlainText();
    sessionValue["curPos"] = ui->sqlEdit->textCursor().position();
    sessionValue["dataView"] = ui->dataView->getSessionValue();

    Db* db = getCurrentDb();
    if (db)
        sessionValue["db"] = db->getName();

    QString loadedFile = ui->sqlEdit->getLoadedFile();
    if (!loadedFile.isEmpty())
        sessionValue["loadedFile"] = loadedFile;

    return sessionValue;
}

bool EditorWindow::restoreSession(const QVariant& sessionValue)
{
    QHash<QString, QVariant> value = sessionValue.toHash();
    if (value.size() == 0)
        return true;

    bool fileLoaded = false;
    if (value.contains("loadedFile"))
        fileLoaded = ui->sqlEdit->loadFile(value["loadedFile"].toString());

    if (value.contains("query") && !fileLoaded)
    {
        ui->sqlEdit->setAutoCompletion(false);
        ui->sqlEdit->setPlainText(value["query"].toString());
        ui->sqlEdit->setAutoCompletion(true);
    }

    if (value.contains("curPos"))
    {
        QTextCursor cursor = ui->sqlEdit->textCursor();
        cursor.setPosition(value["curPos"].toInt());
        ui->sqlEdit->setTextCursor(cursor);
    }

    if (value.contains("db"))
    {
        dbCombo->setCurrentText(value["db"].toString());
        if (dbCombo->currentText().isEmpty() && dbCombo->count() > 0)
            dbCombo->setCurrentIndex(0);
    }

    if (value.contains("dataView"))
    {
        QVariant dataViewSession = value["dataView"];
        ui->dataView->restoreFromSession(dataViewSession);
    }

    return true;
}

void EditorWindow::changeEvent(QEvent *e)
{
    QWidget::changeEvent(e);
    switch (e->type()) {
        case QEvent::LanguageChange:
            ui->retranslateUi(this);
            break;
        default:
            break;
    }
}

Db* EditorWindow::getCurrentDb()
{
    return dbCombo->currentDb();
}

QPair<Db*, QString> EditorWindow::getSoftDbObjectAssociation() const
{
    return {dbCombo->currentDb(), QString()};
}

void EditorWindow::updateResultsDisplayMode()
{
    switch (resultsDisplayMode)
    {
        case EditorWindow::ResultsDisplayMode::SEPARATE_TAB:
        {
            // Remove old view
            ui->resultsContainer->hide();
            ui->resultsContainer->layout()->removeWidget(ui->resultsFrame);

            // Add new view
            ui->tabWidget->insertTab(1, ui->results, tr("Results"));
            ui->resultsFrame->setParent(ui->results);
            ui->results->layout()->addWidget(ui->resultsFrame);
            break;
        }
        case EditorWindow::ResultsDisplayMode::BELOW_QUERY:
        {
            int currIdx = ui->tabWidget->currentIndex();

            // Remove old view
            ui->tabWidget->removeTab(1);
            ui->results->layout()->removeWidget(ui->resultsFrame);

            // Add new view
            ui->resultsContainer->show();
            ui->resultsFrame->setParent(ui->resultsContainer);
            ui->resultsContainer->layout()->addWidget(ui->resultsFrame);

            // If results tab was selected before, switch to first tab
            if (currIdx == 1)
            {
                ui->tabWidget->setCurrentIndex(0);
                ui->dataView->setCurrentIndex(0);
                ui->dataView->getGridView()->setFocus();
            }
            break;
        }
    }
}

void EditorWindow::createActions()
{
    // SQL editor toolbar
    actionMap[CURRENT_DB] = ui->toolBar->addWidget(dbCombo);
    ui->toolBar->addSeparator();
    createAction(EXEC_QUERY, ICONS.EXEC_QUERY, tr("Execute query"), this, SLOT(execQuery()), ui->toolBar, ui->sqlEdit);
    createAction(EXPLAIN_QUERY, ICONS.EXPLAIN_QUERY, tr("Explain query"), this, SLOT(explainQuery()), ui->toolBar, ui->sqlEdit);
    actionMap[QUERIES_TX_SEP] = ui->toolBar->addSeparator();
    createAction(COMMIT_MANUAL_TX, ICONS.COMMIT, tr("Commit"), this, SLOT(commitManualTx()), ui->toolBar, ui->sqlEdit);
    createAction(ROLLBACK_MANUAL_TX, ICONS.ROLLBACK, tr("Rollback"), this, SLOT(rollbackManualTx()), ui->toolBar, ui->sqlEdit);

    // Rest of SQL editor toolbar
    ui->toolBar->addSeparator();
    ui->toolBar->addAction(ui->sqlEdit->getAction(SqlEditor::FORMAT_SQL));
    ui->toolBar->addSeparator();
    ui->toolBar->addAction(ui->sqlEdit->getAction(SqlEditor::SAVE_SQL_FILE));
    attachActionInMenu(ui->sqlEdit->getAction(SqlEditor::SAVE_SQL_FILE), ui->sqlEdit->getAction(SqlEditor::SAVE_AS_SQL_FILE), ui->toolBar);
    ui->toolBar->addAction(ui->sqlEdit->getAction(SqlEditor::OPEN_SQL_FILE));
    ui->toolBar->addSeparator();
    actionMap[SETTINGS] = ui->toolBar->addWidget(createSettingsDropdown());
    ui->toolBar->addSeparator();
    createAction(CREATE_VIEW_FROM_QUERY, ICONS.VIEW_ADD, tr("Create view from query", "sql editor"), this, SLOT(createViewFromQuery()), ui->toolBar);

    createAction(PREV_DB, tr("Previous database"), this, SLOT(prevDb()), this);
    createAction(NEXT_DB, tr("Next database"), this, SLOT(nextDb()), this);

    // History tab toolbar
    createAction(CLEAR_HISTORY, ICONS.CLEAR_HISTORY, tr("Clear execution history", "sql editor"), this, SLOT(clearHistory()), ui->historyToolBar);
    createAction(EXPORT_HISTORY, ICONS.EXPORT_SQL_HISTORY, tr("Export execution history", "sql editor"), this, SLOT(exportHistory()), ui->historyToolBar);

    // Other actions
    createAction(SHOW_NEXT_TAB, tr("Show next tab", "sql editor"), this, SLOT(showNextTab()), this);
    createAction(SHOW_PREV_TAB, tr("Show previous tab", "sql editor"), this, SLOT(showPrevTab()), this);
    createAction(FOCUS_RESULTS_BELOW, tr("Focus results below", "sql editor"), this, SLOT(focusResultsBelow()), this);
    createAction(FOCUS_EDITOR_ABOVE, tr("Focus SQL editor above", "sql editor"), this, SLOT(focusEditorAbove()), this);
    createAction(EXPORT_SELECTED_HISTORY_SQL, tr("Export selected SQL history entries", "sql editor"), this, SLOT(exportSelectedSqlHistory()), ui->historyList);
    createAction(DELETE_SELECTED_HISTORY_SQL, tr("Delete selected SQL history entries", "sql editor"), this, SLOT(deleteSelectedSqlHistory()), ui->historyList);
    createAction(EXEC_ONE_QUERY, ICONS.EXEC_QUERY, tr("Execute single query under cursor"), this, SLOT(execOneQuery()), this);
    createAction(EXEC_ALL_QUERIES, ICONS.EXEC_QUERY, tr("Execute all queries in editor"), this, SLOT(execAllQueries()), this);
    createAction(EXPORT_RESULTS, ICONS.TABLE_EXPORT, tr("Export results", "sql editor"), this, SLOT(exportResults()), this);

    QAction* before = ui->dataView->getAction(DataView::GRID_TOTAL_ROWS);
    ui->dataView->getToolBar(DataView::TOOLBAR_GRID)->insertAction(before, actionMap[EXPORT_RESULTS]);
    ui->dataView->getToolBar(DataView::TOOLBAR_GRID)->insertSeparator(before);

    ui->dataView->getGridView()->saveActionText(SqlQueryView::COMMIT);
    ui->dataView->getGridView()->saveActionText(SqlQueryView::ROLLBACK);
    ui->dataView->getGridView()->saveActionText(SqlQueryView::SELECTIVE_COMMIT);
    ui->dataView->getGridView()->saveActionText(SqlQueryView::SELECTIVE_ROLLBACK);
    ui->dataView->getFormView()->saveActionText(FormView::COMMIT);
    ui->dataView->getFormView()->saveActionText(FormView::ROLLBACK);
}

QToolButton* EditorWindow::createSettingsDropdown()
{
    QMenu* settingsMenu = new QMenu(this);
    settingsMenu->setStyleSheet("QMenu::separator {height: 6px; padding-top: 4px; padding-bottom: 1px;}");

    // Results layout
    createAction(RESULTS_IN_TAB, ICONS.RESULTS_IN_TAB, tr("Results in the separate tab"), this, SLOT(changeResultsLayout()), this);
    createAction(RESULTS_BELOW, ICONS.RESULTS_BELOW, tr("Results below the query"), this, SLOT(changeResultsLayout()), this);

    QActionGroup* resultsLayoutGroup = new QActionGroup(ui->toolBar);
    resultsLayoutGroup->setExclusive(true);
    for (QAction* a : {actionMap[RESULTS_IN_TAB], actionMap[RESULTS_BELOW]})
    {
        a->setCheckable(true);
        resultsLayoutGroup->addAction(a);
        settingsMenu->addAction(a);
    }

    QString tabsString = CFG_UI.General.SqlEditorTabs.get();
    if (tabsString == "SEPARATE_TAB")
        actionMap[RESULTS_IN_TAB]->setChecked(true);
    else if (tabsString == "BELOW_QUERY")
        actionMap[RESULTS_BELOW]->setChecked(true);

    // Separator
    settingsMenu->addSeparator();

    // EXPLAIN mode
    createAction(EXPLAIN_MODE_EXPLAIN, ICONS.EXPLAIN_QUERY, tr("Explain mode: %1", "sql editor").arg("EXPLAIN"), this, SLOT(changeExplainMode()), this);
    createAction(EXPLAIN_MODE_QUERY_PLAN, ICONS.EXPLAIN_QUERY, tr("Explain mode: %1", "sql editor").arg("EXPLAIN QUERY PLAN"), this, SLOT(changeExplainMode()), this);

    QActionGroup* explainModeGroup = new QActionGroup(ui->toolBar);
    explainModeGroup->setExclusive(true);
    for (Action act : {EXPLAIN_MODE_EXPLAIN, EXPLAIN_MODE_QUERY_PLAN})
    {
        actionMap[act]->setCheckable(true);
        explainModeGroup->addAction(actionMap[act]);
        settingsMenu->addAction(actionMap[act]);
    }

    if (CFG_UI.General.SqlEditorExplainMode.get() == Cfg::QUERY_PLAN)
        actionMap[EXPLAIN_MODE_QUERY_PLAN]->setChecked(true);
    else
        actionMap[EXPLAIN_MODE_EXPLAIN]->setChecked(true);

    // Separator
    settingsMenu->addSeparator();

    // Auto-commit
    createAction(AUTO_COMMIT, tr("Auto-commit queries", "sql editor"), this, SLOT(toggleAutoCommit()), this);
    actionMap[AUTO_COMMIT]->setCheckable(true);
    actionMap[AUTO_COMMIT]->setChecked(CFG_UI.General.SqlEditorAutoCommit.get());
    settingsMenu->addAction(actionMap[AUTO_COMMIT]);

    // Toolbar button
    QToolButton* settingsButton = new QToolButton();
    settingsButton->setPopupMode(QToolButton::InstantPopup);
    settingsButton->setIcon(ICONS.SQL_EDITOR_SETTINGS);
    settingsButton->setMenu(settingsMenu);
    settingsButton->setStyleSheet("QToolButton {padding-right: 12px;}");
    settingsButton->setToolTip(tr("Editor window settings", "sql editor"));
    return settingsButton;
}

void EditorWindow::createDbCombo()
{
    dbCombo = new DbComboBox(this);
    dbCombo->setEditable(false);
    dbCombo->setFixedWidth(100);
    dbCombo->setChoiceValidator([this](Db* db) {return validateDbChange(db);});
    connect(dbCombo, SIGNAL(verifiedDbChanged()), this, SLOT(dbChanged()));
}

void EditorWindow::setupDefShortcuts()
{
    // Widget context
    setShortcutContext({EXEC_QUERY, EXEC_QUERY, SHOW_NEXT_TAB, SHOW_PREV_TAB, FOCUS_RESULTS_BELOW,
                        FOCUS_EDITOR_ABOVE}, Qt::WidgetWithChildrenShortcut);

    BIND_SHORTCUTS(EditorWindow, Action);
}

void EditorWindow::selectCurrentQuery(bool fallBackToPreviousIfNecessary)
{
    QTextCursor cursor = ui->sqlEdit->textCursor();
    int pos = cursor.position();

    QString contents = ui->sqlEdit->toPlainText();
    QPair<int, int> boundries = getQueryBoundriesForPosition(contents, pos, fallBackToPreviousIfNecessary);

    if (boundries.second < 0)
    {
        qWarning() << "No tokens to select in EditorWindow::selectCurrentQuery().";
        return;
    }

    cursor.clearSelection();
    cursor.setPosition(boundries.first);
    cursor.setPosition(boundries.second, QTextCursor::KeepAnchor);
    ui->sqlEdit->setTextCursor(cursor);
}

void EditorWindow::updateShortcutTips()
{
    if (actionMap.contains(PREV_DB) && actionMap.contains(NEXT_DB))
    {
        QString prevDbKey = actionMap[PREV_DB]->shortcut().toString(QKeySequence::NativeText);
        QString nextDbKey = actionMap[NEXT_DB]->shortcut().toString(QKeySequence::NativeText);
        dbCombo->setToolTip(tr("Active database (%1/%2)").arg(prevDbKey, nextDbKey));
    }
}

void EditorWindow::execQuery(int explain, QueryExecMode querySelectionMode)
{
    QString sql = getQueryToExecute(querySelectionMode);
    QHash<QString, QVariant> bindParams;
    bool proceed = processBindParams(sql, bindParams);
    if (!proceed)
        return;

    STATUSFIELD->blockFadeOutFor(this);

    if (isManualCommitMode())
    {
        if (!txDb->isTransactionActive())
            txDb->begin();

        resultsModel->setDb(txDb);
    }
    else
    {
        resultsModel->setDb(getCurrentDb());
    }
    resultsModel->setExplainMode(explain);
    resultsModel->setQuery(sql);
    resultsModel->setParams(bindParams);
    resultsModel->setQueryCountLimitForSmartMode(queryLimitForSmartExecution);
    ui->dataView->refreshData(false);
    updateState();
    updateManualCommitStatus();

    if (resultsDisplayMode == ResultsDisplayMode::SEPARATE_TAB)
    {
        ui->tabWidget->setCurrentIndex(1);
        ui->dataView->setCurrentIndex(0);
        ui->dataView->getGridView()->setFocus();
    }
}

void EditorWindow::execOneQuery()
{
    execQuery(-1, SINGLE);
}

void EditorWindow::execAllQueries()
{
    execQuery(-1, ALL);
}

void EditorWindow::explainQuery()
{
    execQuery(CFG_UI.General.SqlEditorExplainMode.get());
}

void EditorWindow::changeExplainMode()
{
    if (actionMap[EXPLAIN_MODE_QUERY_PLAN]->isChecked())
    {
        CFG_UI.General.SqlEditorExplainMode.set(Cfg::QUERY_PLAN);
        actionMap[EXPLAIN_QUERY]->setIcon(actionMap[EXPLAIN_MODE_QUERY_PLAN]->icon());
    }
    else
    {
        CFG_UI.General.SqlEditorExplainMode.set(Cfg::EXPLAIN);
        actionMap[EXPLAIN_QUERY]->setIcon(actionMap[EXPLAIN_MODE_EXPLAIN]->icon());
    }
}

void EditorWindow::changeResultsLayout()
{
    if (actionMap[RESULTS_IN_TAB]->isChecked())
    {
        CFG_UI.General.SqlEditorTabs.set("SEPARATE_TAB");
        resultsDisplayMode = ResultsDisplayMode::SEPARATE_TAB;
    }
    else if (actionMap[RESULTS_BELOW]->isChecked())
    {
        CFG_UI.General.SqlEditorTabs.set("BELOW_QUERY");
        resultsDisplayMode = ResultsDisplayMode::BELOW_QUERY;
    }
    updateResultsDisplayMode();
}

bool EditorWindow::processBindParams(QString& sql, QHash<QString, QVariant>& queryParams)
{
    // Get all bind parameters from the query
    TokenList tokens = Lexer::tokenize(sql);
    TokenList bindTokens = tokens.filter(Token::BIND_PARAM);

    // No bind tokens? Return fast.
    if (bindTokens.isEmpty())
        return true;

    // Process bind tokens, prepare list for a dialog.
    static_qstring(paramTpl, ":arg%1");
    QVector<BindParam*> bindParams;
    QHash<QString, QString> namedBindParams;
    BindParam* bindParam = nullptr;
    bool isNamed = false;
    bool nameAlreadyInList = false;
    int i = 0;
    for (auto&& token : bindTokens)
    {
        isNamed = (token->value != "?");
        nameAlreadyInList = isNamed && namedBindParams.contains(token->value);

        bindParam = new BindParam();
        bindParam->position = i;
        bindParam->originalName = token->value;
        bindParam->newName = (isNamed && nameAlreadyInList) ? namedBindParams[token->value] : paramTpl.arg(i);
        token->value = bindParam->newName;

        if (!isNamed || !nameAlreadyInList)
            bindParams << bindParam;

        if (isNamed && !nameAlreadyInList)
            namedBindParams[bindParam->originalName] = bindParam->newName;

        i++;
    }

    // Show dialog to query user for values
    BindParamsDialog dialog(MAINWINDOW);
    dialog.setBindParams(bindParams);
    bool accepted = (dialog.exec() == QDialog::Accepted);

    // Transfer values from dialog to arguments for query
    if (accepted)
    {
        for (BindParam*& bindParam : bindParams)
            queryParams[bindParam->newName] = bindParam->value;

        sql = tokens.detokenize();
    }

    // Cleanup
    for (BindParam*& bindParam : bindParams)
        delete bindParam;

    return accepted;
}

void EditorWindow::exportHistory(const QModelIndexList &idxList)
{
    QString dir = getFileDialogInitPath();
    QString fName = QFileDialog::getSaveFileName(this, tr("Save to file"), dir,
                                                 QObject::tr("SQL files")+" (*.sql);;" +
                                                 QObject::tr("All files")+" (*)");
    if (fName.isNull())
        return;

    setFileDialogInitPathByFile(fName);

    QFile file(fName);
    if (!file.open(QIODevice::WriteOnly | QIODevice::Text))
    {
        notifyError(tr("Could not open file '%1' for writing: %2").arg(fName, file.errorString()));
        return;
    }

    QTextStream stream(&file);
    for (const QModelIndex& idx : idxList)
    {
        QString sql = idx.data().toString();
        if (!sql.trimmed().endsWith(";"))
            sql += ";";

        QString dbName = ui->historyList->model()->index(idx.row(), histDbNameColumn).data().toString();
        QString dateTime = ui->historyList->model()->index(idx.row(), histDatetimeColumn).data().toString();
        stream << "-- [" << dateTime << "] " << dbName << "\n";
        stream << sql << "\n\n";
    }

    stream.flush();
    file.close();

    notifyInfo(tr("Saved SQL contents to file: %1").arg(fName));
}

bool EditorWindow::initManualCommitForCurrentDb(bool askForWal)
{
    if (currentlyAutoCommit)
        return true;

    Db* currentDb = getCurrentDb();
    QString journalMode = currentDb->exec("PRAGMA journal_mode")->getSingleCell().toString().toUpper();
    if (journalMode != "WAL")
    {
        if (!askForWal)
            return false;

        ManualCommitWalModeDialog walDialog(currentDb->getName(), this);
        walDialog.exec();
        if (walDialog.result() == QDialog::Rejected)
            return false;

        auto modeChangeRes = currentDb->exec("PRAGMA journal_mode = WAL");
        if (modeChangeRes->isError())
        {
            notifyError(tr("Failed to switch journal_mode to WAL. Manual commit mode is unavailable. Error: %1").arg(modeChangeRes->getErrorText()));
            return false;
        }
    }

    if (txDb)
        qCritical() << "txDb wasn't null when initializing manual commit for current DB. This should never happen.";

    txDb = currentDb->clone();
    if (!txDb->openQuiet())
    {
        notifyError(tr("Failed to open new database connection. Manual commit mode will not be enabled. Error: %1").arg(txDb->getErrorText()));
        if (journalMode != "WAL")
        {
            notifyError(tr("The joirnal_mode will be switched back to %1.").arg(journalMode));
            currentDb->exec(QString("PRAGMA journal_mode = %1").arg(journalMode));
        }
        safe_delete(txDb);
        return false;
    }
    txDb->copyStateFrom(currentDb);
    resultsModel->setDb(txDb);

    return true;
}

bool EditorWindow::cleanUpManualCommitForCurrentDb()
{
    if (currentlyAutoCommit || !txDb)
        return true;

    if (txDb->isOpen())
    {
        if (txDb->isTransactionActive() && !confirmPendingManualTx(txDb->getName()))
            return false;

        txDb->closeQuiet();
    }
    delete txDb;
    txDb = nullptr;

    return true;
}

bool EditorWindow::getAutoCommit() const
{
    return currentlyAutoCommit;
}

bool EditorWindow::setAutoCommit(bool enabled, bool askForWal)
{
    if (enabled == currentlyAutoCommit)
        return true;

    // Cleanup before switching to auto-commit, init after switching to manual commit.
    // It's because these methods internally double-check auto-commit status,
    // so if we want to clean up, the manual commit needs to _still_ be active,
    // while to init manual commit, the manual commit needs to be _already_ set.

    bool result = true;
    if (enabled)
        result &= cleanUpManualCommitForCurrentDb();

    currentlyAutoCommit = enabled;

    if (!enabled)
        result &= initManualCommitForCurrentDb(askForWal);

    if (!result)
    {
        currentlyAutoCommit = !enabled;
        actionMap[AUTO_COMMIT]->setChecked(currentlyAutoCommit);
        return false;
    }

    return true;
}

bool EditorWindow::hasPendingManualTx(bool includeDataViewChanges) const
{
    if (currentlyAutoCommit || !txDb || !txDb->isValid())
        return false;

    return txDb->isTransactionActive() || (includeDataViewChanges && ui->dataView->isUncommitted());
}

bool EditorWindow::isManualCommitMode() const
{
    return !currentlyAutoCommit && txDb && txDb->isValid();
}

void EditorWindow::clearReadOnlyManualTx(bool respectSavepoint)
{
    bool savepointSatisfied = !respectSavepoint ||
            resultsModel->getExplainMode() >= 0 ||
            !hasExplicitSavepoint(resultsModel->getQuery());

    if (isManualCommitMode() && txDb->isTransactionActive() && txDb->getTransactionState() != Db::TransactionState::WRITE && savepointSatisfied)
    {
        // No need to keep read-only tx
        txDb->rollback();
        updateManualCommitStatus();
    }
}

void EditorWindow::dbChanged()
{
    if (!cleanUpManualCommitForCurrentDb())
    {
        setCurrentDb(ui->sqlEdit->getDb());
        return;
    }

    ui->sqlEdit->setDb(getCurrentDb());

    currentlyAutoCommit = CFG_UI.General.SqlEditorAutoCommit.get();
    actionMap[AUTO_COMMIT]->setChecked(currentlyAutoCommit);

    if (!initManualCommitForCurrentDb(false))
        useAutoCommitForCurrentDb();

    updateManualCommitStatus();
    DBTREE->updateMdiAreaLink();
}

void EditorWindow::executionSuccessful()
{
    double secs = ((double)resultsModel->getExecutionTime()) / 1000000000;
    QString time = QString::number(secs, 'f', CFG_UI.General.SqlEditorExecTimePrecision.get());
    while (time.endsWith("0") && time.contains("."))
        time.chop(1);

    if (time.endsWith("."))
        time.chop(1);

    if (resultsModel->wasDataModifyingQuery())
    {
        QString rowsAffected = QString::number(resultsModel->getTotalRowsAffected());
        notifyInfo(tr("Query finished in %1 second(s). Rows affected: %2").arg(time, rowsAffected));
    }
    else
    {
        notifyInfo(tr("Query finished in %1 second(s).").arg(time));
    }

    lastQueryHistoryId = CFG->addSqlHistory(resultsModel->getQuery(), resultsModel->getDb()->getName(), resultsModel->getExecutionTime(), 0);

    // If we added first history entry - resize dates column.
    if (ui->historyList->model()->rowCount() == 1)
        ui->historyList->resizeColumnToContents(1);

    Db* currentDb = getCurrentDb();
    if (currentDb && resultsModel->wasSchemaModified())
        DBTREE->refreshSchema(currentDb);

    lastSuccessfulQuery = resultsModel->getQuery();

    STATUSFIELD->releaseFadeOutFor(this);
    updateState();
    clearReadOnlyManualTx(true);
}

void EditorWindow::executionFailed(const QString &errorText)
{
    notifyError(errorText);
    STATUSFIELD->releaseFadeOutFor(this);
    updateState();
    clearReadOnlyManualTx(false);
}

void EditorWindow::storeExecutionInHistory()
{
    qint64 rowsReturned = resultsModel->getTotalRowsReturned();
    qint64 rowsAffected = resultsModel->getTotalRowsAffected();
    qint64 rows;
    if (rowsReturned > 0)
        rows = rowsReturned;
    else
        rows = rowsAffected;

    CFG->updateSqlHistory(lastQueryHistoryId, resultsModel->getQuery(), resultsModel->getDb()->getName(), resultsModel->getExecutionTime(), rows);
}

void EditorWindow::prevDb()
{
    int idx = dbCombo->currentIndex() - 1;
    if (idx < 0)
        return;

    dbCombo->setCurrentIndex(idx);
}

void EditorWindow::nextDb()
{
    int idx = dbCombo->currentIndex() + 1;
    if (idx >= dbCombo->count())
        return;

    dbCombo->setCurrentIndex(idx);
}

void EditorWindow::showNextTab()
{
    int tabIdx = ui->tabWidget->currentIndex();
    tabIdx++;
    ui->tabWidget->setCurrentIndex(tabIdx);
}

void EditorWindow::showPrevTab()
{
    int tabIdx = ui->tabWidget->currentIndex();
    tabIdx--;
    ui->tabWidget->setCurrentIndex(tabIdx);
}

void EditorWindow::focusResultsBelow()
{
    if (resultsDisplayMode != ResultsDisplayMode::BELOW_QUERY)
        return;

    ui->dataView->setCurrentIndex(0);
    ui->dataView->getGridView()->setFocus();
}

void EditorWindow::focusEditorAbove()
{
    if (resultsDisplayMode != ResultsDisplayMode::BELOW_QUERY)
        return;

    ui->sqlEdit->setFocus();
}

void EditorWindow::historyEntrySelected(const QModelIndex& current, const QModelIndex& previous)
{
    Q_UNUSED(previous);
    QString sql = ui->historyList->model()->index(current.row(), histSqlColumn).data().toString();
    ui->historyContents->setPlainText(sql);
}

void EditorWindow::historyEntryActivated(const QModelIndex& current)
{
    QString sql = ui->historyList->model()->index(current.row(), histSqlColumn).data().toString();
    ui->sqlEdit->setPlainText(sql);
    ui->tabWidget->setCurrentIndex(0);
}

void EditorWindow::deleteSelectedSqlHistory()
{
    if (ui->historyList->selectionModel()->selectedIndexes().isEmpty())
        return;

    QList<qint64> ids;
    for (QModelIndex& idx : ui->historyList->selectionModel()->selectedRows(0))
        ids += idx.data().toLongLong();

    CFG->deleteSqlHistory(ids);
}

void EditorWindow::exportSelectedSqlHistory()
{
    QSet<int> rows;
    for (const QModelIndex& idx : ui->historyList->selectionModel()->selectedIndexes())
        rows << idx.row();

    QModelIndexList idxList;
    for (int row : rows)
        idxList << ui->historyList->model()->index(row, histSqlColumn);

    exportHistory(idxList);
}

void EditorWindow::clearHistory()
{
    QMessageBox::StandardButton res = QMessageBox::question(this, tr("Clear execution history"), tr("Are you sure you want to erase the entire SQL execution history? "
                                                                                                    "This cannot be undone."));
    if (res != QMessageBox::Yes)
        return;

    CFG->clearSqlHistory();
}

void EditorWindow::exportHistory()
{
    QModelIndexList idxList;
    int rows = ui->historyList->model()->rowCount();
    for (int row = 0; row < rows; ++row)
        idxList << ui->historyList->model()->index(row, histSqlColumn);

    exportHistory(idxList);
}

void EditorWindow::sqlHistoryContextMenuRequested(const QPoint &pos)
{
    bool hasSelectedItems = !ui->historyList->selectionModel()->selectedIndexes().isEmpty();
    actionMap[EXPORT_SELECTED_HISTORY_SQL]->setEnabled(hasSelectedItems);
    actionMap[DELETE_SELECTED_HISTORY_SQL]->setEnabled(hasSelectedItems);

    sqlHistoryMenu->popup(ui->historyList->mapToGlobal(pos));
}

void EditorWindow::setupSqlHistoryMenu()
{
    sqlHistoryMenu = new QMenu(this);
    sqlHistoryMenu->addAction(actionMap[EXPORT_SELECTED_HISTORY_SQL]);
    sqlHistoryMenu->addAction(actionMap[DELETE_SELECTED_HISTORY_SQL]);
}

void EditorWindow::exportResults()
{
    if (!ExportManager::isAnyPluginAvailable())
    {
        notifyError(tr("Cannot export, because no export plugin is loaded."));
        return;
    }

    QString query = lastSuccessfulQuery.isEmpty() ?  getQueryToExecute() : lastSuccessfulQuery;
    QStringList queries = splitQueries(query, false, true);
    if (queries.size() == 0)
    {
        qWarning() << "No queries after split in EditorWindow::exportResults()";
        return;
    }

    ExportDialog dialog(this);
    dialog.setQueryMode(getCurrentDb(), queries.last().trimmed());
    dialog.exec();
}

void EditorWindow::toggleAutoCommit()
{
    bool enabled = actionMap[AUTO_COMMIT]->isChecked();
    if (!setAutoCommit(enabled, true))
    {
        actionMap[AUTO_COMMIT]->setChecked(!enabled);
        return;
    }
    CFG_UI.General.SqlEditorAutoCommit.set(enabled);
    updateManualCommitStatus();
    if (enabled)
        notifyInfo(tr("Query auto-commit is now enabled."));
    else
        notifyInfo(tr("Query auto-commit is now disabled."));
}

void EditorWindow::useAutoCommitForCurrentDb()
{
    currentlyAutoCommit = true;
    actionMap[AUTO_COMMIT]->setChecked(currentlyAutoCommit);
    updateManualCommitStatus();
    qDebug() << "Manual commit mode is unavailable for the selected database. Auto-commit will be used instead.";
}

bool EditorWindow::hasExplicitSavepoint(const QString& query) const
{
    QStringList queries = splitQueries(query, false, true);
    for (const QString& q : queries)
    {
        if (q.trimmed().toUpper().startsWith("SAVEPOINT"))
            return true;
    }
    return false;
}

void EditorWindow::updateManualCommitStatus()
{
    bool manualCommit = !currentlyAutoCommit;
    bool executionInProgress = resultsModel->isExecutionInProgress();

    if (actionMap[QUERIES_TX_SEP]->isVisible() == actionMap[AUTO_COMMIT]->isChecked()) // manual tx action visibility equal to enabled autocommit? requires update
        updateManualCommitIconsAndLabels(manualCommit);

    if (manualCommit)
    {
        bool pendingTx = hasPendingManualTx();
        actionMap[COMMIT_MANUAL_TX]->setEnabled(pendingTx);
        actionMap[ROLLBACK_MANUAL_TX]->setEnabled(pendingTx);
        actionMap[CURRENT_DB]->setEnabled(!pendingTx && !executionInProgress);
    }
    else
        actionMap[CURRENT_DB]->setEnabled(!executionInProgress);
}

void EditorWindow::updateManualCommitIconsAndLabels(bool manualCommit)
{
    actionMap[QUERIES_TX_SEP]->setVisible(manualCommit);
    actionMap[COMMIT_MANUAL_TX]->setVisible(manualCommit);
    actionMap[ROLLBACK_MANUAL_TX]->setVisible(manualCommit);

    auto gridView = ui->dataView->getGridView();
    auto formView = ui->dataView->getFormView();
    if (manualCommit)
    {
        gridView->getAction(SqlQueryView::COMMIT)->setText(tr("Apply changes to the transaction"));
        gridView->getAction(SqlQueryView::ROLLBACK)->setText(tr("Discard changes in data view"));
        gridView->getAction(SqlQueryView::SELECTIVE_COMMIT)->setText(tr("Apply selected changes to the transaction"));
        gridView->getAction(SqlQueryView::SELECTIVE_ROLLBACK)->setText(tr("Discard changes in selected cells"));
        formView->getAction(FormView::COMMIT)->setText(tr("Apply changes to the transaction"));
        formView->getAction(FormView::ROLLBACK)->setText(tr("Discard changes in data view"));

        gridView->getAction(SqlQueryView::COMMIT)->setIcon(ICONS.TX_APPLY);
        gridView->getAction(SqlQueryView::ROLLBACK)->setIcon(ICONS.TX_DISCARD);
        gridView->getAction(SqlQueryView::SELECTIVE_COMMIT)->setIcon(ICONS.TX_APPLY);
        gridView->getAction(SqlQueryView::SELECTIVE_ROLLBACK)->setIcon(ICONS.TX_DISCARD);
        formView->getAction(FormView::COMMIT)->setIcon(ICONS.TX_APPLY);
        formView->getAction(FormView::ROLLBACK)->setIcon(ICONS.TX_DISCARD);
    }
    else
    {
        gridView->restoreSavedText(SqlQueryView::COMMIT);
        gridView->restoreSavedText(SqlQueryView::ROLLBACK);
        gridView->restoreSavedText(SqlQueryView::SELECTIVE_COMMIT);
        gridView->restoreSavedText(SqlQueryView::SELECTIVE_ROLLBACK);
        formView->restoreSavedText(FormView::COMMIT);
        formView->restoreSavedText(FormView::ROLLBACK);

        gridView->getAction(SqlQueryView::COMMIT)->setIcon(ICONS.COMMIT);
        gridView->getAction(SqlQueryView::ROLLBACK)->setIcon(ICONS.ROLLBACK);
        gridView->getAction(SqlQueryView::SELECTIVE_COMMIT)->setIcon(ICONS.COMMIT);
        gridView->getAction(SqlQueryView::SELECTIVE_ROLLBACK)->setIcon(ICONS.ROLLBACK);
        formView->getAction(FormView::COMMIT)->setIcon(ICONS.COMMIT);
        formView->getAction(FormView::ROLLBACK)->setIcon(ICONS.ROLLBACK);
    }

    // Refresh icon texts that include hotkeys, after updating action text
    gridView->refreshShortcut(SqlQueryView::COMMIT);
    gridView->refreshShortcut(SqlQueryView::ROLLBACK);
    gridView->refreshShortcut(SqlQueryView::SELECTIVE_COMMIT);
    gridView->refreshShortcut(SqlQueryView::SELECTIVE_ROLLBACK);
    formView->refreshShortcut(FormView::COMMIT);
    formView->refreshShortcut(FormView::ROLLBACK);
}

bool EditorWindow::validateDbChange(Db* db)
{
    if (hasPendingManualTx())
    {
        notifyError(tr("Cannot change database while having pending manual transaction. Please commit or rollback the transaction before changing the database."));
        return false;
    }

    return true;
}

void EditorWindow::openManualTxForDataCommit(int dataRows)
{
    if (dataRows <= 0)
        return;

    if (isManualCommitMode() && !hasPendingManualTx(false))
    {
        txDb->begin();
        updateManualCommitStatus();
    }
}

void EditorWindow::commitManualTx()
{
    if (currentlyAutoCommit || !txDb)
    {
        qCritical() << "Manual commit requested while auto-commit is enabled or txDb is not initialized. This should never happen." << currentlyAutoCommit << txDb;
        return;
    }

    if (ui->dataView->isUncommitted())
        ui->dataView->commit();

    if (ui->dataView->isUncommitted())
        return;

    txDb->commit();
    txDb->exec("PRAGMA wal_checkpoint(FULL)");

    updateManualCommitStatus();
    updateState();
    DBTREE->refreshSchema(getCurrentDb());

    notifyInfo(tr("Manual transaction committed successfully."));
}

void EditorWindow::rollbackManualTx()
{
    rollbackManualTx(true);
}

void EditorWindow::rollbackManualTx(bool allowReloadIfFeasible)
{
    if (currentlyAutoCommit || !txDb)
    {
        qCritical() << "Manual rollback requested while auto-commit is enabled or txDb is not initialized. This should never happen." << currentlyAutoCommit << txDb;
        return;
    }

    bool shouldReload = !resultsModel->wasDataModifyingQuery();

    if (ui->dataView->isUncommitted())
        ui->dataView->rollback();

    txDb->rollback();

    updateManualCommitStatus();
    updateState();

    if (shouldReload)
        ui->dataView->refreshData();

    notifyInfo(tr("Manual transaction rolled back."));
}

bool EditorWindow::confirmPendingManualTx(const QString& dbName)
{
    ManualCommitPendingTxDialog pendingTxDialog(dbName, this);
    pendingTxDialog.exec();
    if (pendingTxDialog.result() == QDialog::Rejected)
        return false;

    switch (static_cast<ManualCommitPendingTxDialog::Action>(pendingTxDialog.result()))
    {
        case ManualCommitPendingTxDialog::COMMIT:
            commitManualTx();
            break;
        case ManualCommitPendingTxDialog::ROLLBACK:
            rollbackManualTx(false);
            break;
        default:
            qCritical() << "Invalid result code from ManualCommitPendingTxDialog:" << pendingTxDialog.result();
            return false;
    }

    return true;
}

void EditorWindow::handleDbAboutToDisconnect(Db* db, bool& deny)
{
    Db* currentDb = getCurrentDb();
    if (!currentDb || db != currentDb)
        return;

    if (!hasPendingManualTx())
        return;

    if (!confirmPendingManualTx(db->getName()))
        deny = true;
}

void EditorWindow::createViewFromQuery()
{
    if (!getCurrentDb())
    {
        notifyError(tr("No database selected in the SQL editor. Cannot create a view for unknown database."));
        return;
    }

    QString sql = getQueryToExecute();
    DbObjectDialogs dialogs(getCurrentDb());
    dialogs.addView(sql);
}

void EditorWindow::updateState()
{
    bool executionInProgress = resultsModel->isExecutionInProgress();
    actionMap[CURRENT_DB]->setEnabled(!executionInProgress);
    actionMap[EXEC_QUERY]->setEnabled(!executionInProgress);
    actionMap[EXPLAIN_QUERY]->setEnabled(!executionInProgress);
}

void EditorWindow::checkTextChangedForSession()
{
    if (!ui->sqlEdit->getHighlightingSyntax() && !settingSqlContents)
        emit sessionValueChanged();
}

void EditorWindow::queryHighlightingConfigChanged(const QVariant& enabled)
{
    ui->sqlEdit->setCurrentQueryHighlighting(enabled.toBool());
}

void EditorWindow::openFile(const QString& fileName)
{
    ui->sqlEdit->loadFile(fileName);
}

void EditorWindow::refreshValidDbObjects()
{
    ui->sqlEdit->refreshValidObjects();
}

size_t qHash(EditorWindow::ActionGroup actionGroup)
{
    return static_cast<size_t>(actionGroup);
}

bool EditorWindow::isUncommitted() const
{
    return currentlyAutoCommit ? ui->dataView->isUncommitted() : hasPendingManualTx();
}

QString EditorWindow::getQuitUncommittedConfirmMessage() const
{
    return tr("Editor window \"%1\" has uncommitted data.").arg(getMdiWindow()->windowTitle());
}

void EditorWindow::renameForFile(const QString fileName)
{
    Q_UNUSED(fileName);
    updateWindowTitle();
    MDIAREA->getTaskByWindow(getMdiWindow())->setToolTip(fileName);
}
