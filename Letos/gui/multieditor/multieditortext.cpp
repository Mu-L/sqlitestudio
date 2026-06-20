#include "multieditortext.h"
#include "diff/diff_match_patch.h"
#include "iconmanager.h"
#include "uiconfig.h"
#include <QPlainTextEdit>
#include <QVariant>
#include <QVBoxLayout>
#include <QAction>
#include <QMenu>
#include <QDebug>

CFG_KEYS_DEFINE(MultiEditorText)

MultiEditorText::MultiEditorText(QWidget *parent) :
    MultiEditorWidget(parent)
{
    setLayout(new QVBoxLayout());
    textEdit = new QPlainTextEdit();
    textEdit->setLineWrapMode(QPlainTextEdit::NoWrap); // Disable line wrapping for performance with long lines (1MB single line freezes app for several seconds)
    layout()->addWidget(textEdit);
    initActions();
    setupMenu();

    setFocusProxy(textEdit);
    textEdit->setContextMenuPolicy(Qt::CustomContextMenu);
    textEdit->setTabChangesFocus(true);
    textEdit->setFont(CFG_UI.Fonts.SqlEditor.get());

    connect(textEdit, &QPlainTextEdit::modificationChanged, this, &MultiEditorText::modificationChanged);
    connect(textEdit, SIGNAL(customContextMenuRequested(QPoint)), this, SLOT(showCustomMenu(QPoint)));
}

void MultiEditorText::setValue(const QVariant& value)
{
    originalText = value.toString();
    textEdit->setPlainText(originalText);
}

QVariant MultiEditorText::getValue()
{
    return getValueFromPlainTextEdit(originalText, textEdit);
}

void MultiEditorText::setReadOnly(bool value)
{
    textEdit->setReadOnly(value);
}

QToolBar* MultiEditorText::getToolBar(int toolbar) const
{
    Q_UNUSED(toolbar);
    return nullptr;
}

void MultiEditorText::focusThisWidget()
{
    textEdit->setFocus();
}

QList<QWidget*> MultiEditorText::getNoScrollWidgets()
{
    // We don't return text, we want it to be scrolled.
    QList<QWidget*> list;
    return list;
}

SearchTextLocator *MultiEditorText::getTextLocator()
{
    if (!textLocator)
        textLocator = new SearchTextLocator(textEdit);

    return textLocator;
}

QString MultiEditorText::getValueFromPlainTextEdit(const QString& originalText, QPlainTextEdit* textEdit)
{
    QString newText = textEdit->document()->toRawText();
    if (originalText.contains(QChar::ParagraphSeparator) || originalText.contains(QChar::LineSeparator))
        return restoreOriginalSeparatorsWithDiff(originalText, newText);

    newText.replace(QChar::ParagraphSeparator, '\n');
    newText.replace(QChar::LineSeparator, '\n');
    return newText;
}

void MultiEditorText::modificationChanged(bool changed)
{
    if (changed)
        emit valueModified();
}

void MultiEditorText::deleteSelected()
{
    textEdit->textCursor().removeSelectedText();
}

void MultiEditorText::showCustomMenu(const QPoint& point)
{
    contextMenu->popup(textEdit->mapToGlobal(point));
}

void MultiEditorText::updateUndoAction(bool enabled)
{
    actionMap[UNDO]->setEnabled(enabled);
}

void MultiEditorText::updateRedoAction(bool enabled)
{
    actionMap[REDO]->setEnabled(enabled);
}

void MultiEditorText::updateCopyAction(bool enabled)
{
    actionMap[CUT]->setEnabled(enabled);
    actionMap[COPY]->setEnabled(enabled);
    actionMap[DELETE]->setEnabled(enabled);
}

void MultiEditorText::toggleTabFocus()
{
    textEdit->setTabChangesFocus(actionMap[TAB_CHANGES_FOCUS]->isChecked());
}

void MultiEditorText::createActions()
{
    createAction(TAB_CHANGES_FOCUS, tr("Tab changes focus"), this, SLOT(toggleTabFocus()), this);
    createAction(CUT, ICONS.ACT_CUT, tr("Cut"), textEdit, SLOT(cut()), this);
    createAction(COPY, ICONS.ACT_COPY, tr("Copy"), textEdit, SLOT(copy()), this);
    createAction(PASTE, ICONS.ACT_PASTE, tr("Paste"), textEdit, SLOT(paste()), this);
    createAction(DELETE, ICONS.ACT_DELETE, tr("Delete"), this, SLOT(deleteSelected()), this);
    createAction(UNDO, ICONS.ACT_UNDO, tr("Undo"), textEdit, SLOT(undo()), this);
    createAction(REDO, ICONS.ACT_REDO, tr("Redo"), textEdit, SLOT(redo()), this);

    actionMap[CUT]->setEnabled(false);
    actionMap[COPY]->setEnabled(false);
    actionMap[DELETE]->setEnabled(false);
    actionMap[UNDO]->setEnabled(false);
    actionMap[REDO]->setEnabled(false);

    actionMap[TAB_CHANGES_FOCUS]->setCheckable(true);
    actionMap[TAB_CHANGES_FOCUS]->setChecked(true);

    connect(textEdit, &QPlainTextEdit::undoAvailable, this, &MultiEditorText::updateUndoAction);
    connect(textEdit, &QPlainTextEdit::redoAvailable, this, &MultiEditorText::updateRedoAction);
    connect(textEdit, &QPlainTextEdit::copyAvailable, this, &MultiEditorText::updateCopyAction);
}

void MultiEditorText::setupDefShortcuts()
{
    BIND_SHORTCUTS(MultiEditorText, Action);
}

void MultiEditorText::setupMenu()
{
    contextMenu = new QMenu(this);
    contextMenu->addAction(actionMap[TAB_CHANGES_FOCUS]);
    contextMenu->addSeparator();
    contextMenu->addAction(actionMap[UNDO]);
    contextMenu->addAction(actionMap[REDO]);
    contextMenu->addSeparator();
    contextMenu->addAction(actionMap[CUT]);
    contextMenu->addAction(actionMap[COPY]);
    contextMenu->addAction(actionMap[PASTE]);
    contextMenu->addAction(actionMap[DELETE]);
}

bool MultiEditorText::isOriginalOrEditorLineBreak(QChar ch)
{
    return ch == QChar('\n') ||
           ch == QChar::LineSeparator ||
           ch == QChar::ParagraphSeparator;
}

bool MultiEditorText::isQTextDocumentSeparator(QChar ch)
{
    return ch == QChar::LineSeparator ||
           ch == QChar::ParagraphSeparator;
}

QString MultiEditorText::normalizedForDiff(QString text)
{
    for (int i = 0; i < text.size(); ++i)
    {
        if (isOriginalOrEditorLineBreak(text.at(i)))
            text[i] = QChar('\n');
    }

    return text;
}

QVector<int> MultiEditorText::buildCurrentToOriginalMap(const QString& originalText, const QString& currentText)
{
    QString normalizedOriginal = normalizedForDiff(originalText);
    QString normalizedCurrent = normalizedForDiff(currentText);
    QVector<int> currentToOriginal(currentText.size(), -1);

    diff_match_patch dmp;
    int originalPos = 0;
    int currentPos = 0;
    auto diffs = dmp.diff_main(normalizedOriginal, normalizedCurrent, false);
    for (const Diff& diff : std::as_const(diffs))
    {
        int len = diff.text.size();
        switch (diff.operation)
        {
            case Operation::EQUAL:
            {
                for (int i = 0; i < len; ++i)
                {
                    if (currentPos + i < currentToOriginal.size())
                        currentToOriginal[currentPos + i] = originalPos + i;
                }
                originalPos += len;
                currentPos += len;
                break;
            }
            case Operation::DELETE:
            {
                originalPos += len;
                break;
            }
            case Operation::INSERT:
            {
                currentPos += len;
                break;
            }
        }
    }

    return currentToOriginal;
}

QString MultiEditorText::restoreOriginalSeparatorsWithDiff(const QString& originalText, const QString& currentRawText)
{
    QString result;

    QVector<int> currentToOriginal = buildCurrentToOriginalMap(originalText, currentRawText);
    result.reserve(currentRawText.size());
    for (int i = 0; i < currentRawText.size(); ++i)
    {
        const QChar currentChar = currentRawText.at(i);
        if (!isQTextDocumentSeparator(currentChar))
        {
            result += currentChar;
            continue;
        }

        const int originalPos = currentToOriginal.value(i, -1);
        if (originalPos >= 0 && originalPos < originalText.size())
        {
            const QChar originalChar = originalText.at(originalPos);
            if (originalChar == QChar::LineSeparator)
                result += QChar::LineSeparator;
            else if (originalChar == QChar::ParagraphSeparator)
                result += QChar::ParagraphSeparator;
            else
                result += QChar('\n');
        }
        else
            result += QChar('\n');
    }

    return result;
}

MultiEditorWidget* MultiEditorTextPlugin::getInstance()
{
    return new MultiEditorText();
}

bool MultiEditorTextPlugin::validFor(const DataType& dataType)
{
    Q_UNUSED(dataType);
    return true;
}

int MultiEditorTextPlugin::getPriority(const QVariant& value, const DataType& dataType)
{
    Q_UNUSED(value);
    switch (dataType.getType())
    {
        case DataType::BLOB:
        case DataType::BOOLEAN:
        case DataType::BIGINT:
        case DataType::DECIMAL:
        case DataType::DOUBLE:
        case DataType::INTEGER:
        case DataType::INT:
        case DataType::NUMERIC:
        case DataType::REAL:
        case DataType::DATE:
        case DataType::DATETIME:
        case DataType::TIME:
            return 10;
        case DataType::NONE:
        case DataType::STRING:
        case DataType::TEXT:
        case DataType::CHAR:
        case DataType::VARCHAR:
        case DataType::ANY:
        case DataType::unknown:
            break;
    }
    return 4;
}

QString MultiEditorTextPlugin::getTabLabel()
{
    return tr("Text");
}
