#include "sqlviewmodel.h"
#include "querygenerator.h"
#include "services/notifymanager.h"

SqlViewModel::SqlViewModel(QObject *parent) :
    SqlDataSourceQueryModel(parent)
{
    connect(this, &SqlQueryModel::loadingEnded, this, &SqlViewModel::reviewEditingByTrigger);
}

QString SqlViewModel::generateSelectQueryForItems(const QList<SqlQueryItem*>& items)
{
    QHash<QString, QVariantList> values = toValuesGroupedByColumns(items);

    QueryGenerator generator;
    return generator.generateSelectFromView(db, view, values);
}

void SqlViewModel::setDatabaseAndView(const QString& database, const QString& view)
{
    this->database = database;
    this->view = view;
    updateTablesInUse(view);
}

QString SqlViewModel::getDataSource()
{
    return getDatabasePrefix() + wrapObjIfNeeded(view);
}

QString SqlViewModel::getTableOrView()
{
    return view;
}

bool SqlViewModel::commitEditedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    if (itemsInRow.size() == 0)
    {
        qWarning() << "SqlViewModel::commitEditedRow() called with no items in the list.";
        return true;
    }

    SchemaResolver resolver(db);
    QList<SqliteCreateTriggerPtr> triggers = resolver.getParsedTriggersForView(database, view);

    bool allColumnsByTrigger = false;
    QStringList columnsCoveredByTriggers;
    for (const SqliteCreateTriggerPtr& trigger : triggers)
    {
        if (trigger->eventTime != SqliteCreateTrigger::Time::INSTEAD_OF || !trigger->event)
            continue;

        if (trigger->event->type == SqliteCreateTrigger::Event::UPDATE)
        {
            allColumnsByTrigger = true;
            break;
        }

        if (trigger->event->type == SqliteCreateTrigger::Event::UPDATE_OF)
            columnsCoveredByTriggers += trigger->event->columnNames;
    }

    if (allColumnsByTrigger)
    {
        scheduleInsteadOfTriggerInfoMsg(successfulCommitHandlers);
        return commitEditedRowAllColumnsByTrigger(itemsInRow, successfulCommitHandlers);
    }

    QList<SqlQueryItem*> itemsLeft;
    bool trigRes = commitEditedRowByTrigger(itemsInRow, columnsCoveredByTriggers, itemsLeft, successfulCommitHandlers);
    if (itemsLeft.size() != itemsInRow.size())
        scheduleInsteadOfTriggerInfoMsg(successfulCommitHandlers);

    return trigRes && (itemsLeft.isEmpty() || SqlDataSourceQueryModel::commitEditedRow(itemsLeft, successfulCommitHandlers));
}

bool SqlViewModel::commitAddedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    if (!cachedFeatures.testFlag(INSERT_ROW))
    {
        qWarning() << "Tried to commit added row in SqlViewModel, but INSERT_ROW feature is not supported by the model.";
        return false;
    }

    return SqlDataSourceQueryModel::commitAddedRow(itemsInRow, successfulCommitHandlers);
}

bool SqlViewModel::commitDeletedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    if (!cachedFeatures.testFlag(DELETE_ROW))
    {
        qWarning() << "Tried to commit deleted row in SqlViewModel, but DELETE_ROW feature is not supported by the model.";
        return false;
    }

    return SqlDataSourceQueryModel::commitDeletedRow(itemsInRow, successfulCommitHandlers);
}

bool SqlViewModel::commitEditedRowAllColumnsByTrigger(const QList<SqlQueryItem*>& items, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    CommitUpdateQueryBuilder queryBuilder;
    queryBuilder.addReturningConst(); // to quickly return number of affected rows
    queryBuilder.setDatabase(getDatabaseForCommit(database));
    queryBuilder.setTableOrView(wrapObjName(view));

    // RowId used for update using trigger
    int rowIdx = items.first()->row();
    RowId trigRowId = getRowIdForRow(items);
    queryBuilder.setRowId(trigRowId);

    // Columns & bind params
    for (SqlQueryItem* item : items)
        queryBuilder.addColumn(item->getColumn()->displayName);

    // Per-column arguments
    QString query = queryBuilder.build();
    QHash<QString,QVariant> queryArgs = queryBuilder.getQueryArgs();
    QStringList assignmentArgs = queryBuilder.getAssignmentArgs();
    for (int i = 0, total = items.size(); i < total; ++i)
        queryArgs[assignmentArgs[i]] = items[i]->getValue();

    // Get the data
    SqlQueryPtr results = db->exec(query, queryArgs);
    if (results->isError())
    {
        QString errMsg = tr("An error occurred while committing the data: %1").arg(results->getErrorText());
        for (SqlQueryItem* item : items)
            item->setCommittingError(true, errMsg);

        notifyError(errMsg);
        return false;
    }

    // Check if the trigger modified more than 1 row and warn about it
    int updateCount = results->getAll().size();
    if (updateCount > 1)
    {
        successfulCommitHandlers << [rowIdx, updateCount]()
        {
            notifyWarn(tr("Row %1: the INSTEAD OF UPDATE trigger modified more than one row (%2). The view does not uniquely identify the edited record.")
                       .arg(QString::number(rowIdx + 1), QString::number(updateCount)));
        };
    }

    // Actual ROWID (or basically any values in the committed row) may be changed by the trigger, but it's practically impossible to find out
    // which columns were changed and in what way. For now the approach is to have the user refresh data if he's aware of such triggers
    // and wants to see the actual data after commit.
    // It's the least risky approach, because trying to guess how the trigger modified the data may lead to incorrect values in the model,
    // which is even worse than not refreshing data at all.
    // Automatic refreshing may be undesired, because it could be a long-running query.

    return true;
}

bool SqlViewModel::commitEditedRowByTrigger(const QList<SqlQueryItem*>& items, const QStringList& trigColumns, QList<SqlQueryItem*>& itemsLeft, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    QList<SqlQueryItem*> itemsToCommit;
    for (SqlQueryItem* item : items)
    {
        if (trigColumns.contains(item->getColumn()->displayName, Qt::CaseInsensitive))
           itemsToCommit << item;
        else
           itemsLeft << item;
    }
    return commitEditedRowAllColumnsByTrigger(itemsToCommit, successfulCommitHandlers);
}

bool SqlViewModel::commitAddedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, const QList<QVariant>& rowValues, const RowId& insertRowId, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    Q_UNUSED(itemsInRow);
    Q_UNUSED(rowValues);
    Q_UNUSED(insertRowId);
    Q_UNUSED(successfulCommitHandlers);
    return true;
}

bool SqlViewModel::commitDeletedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, int deletedRowCount, QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    Q_UNUSED(itemsInRow);
    Q_UNUSED(successfulCommitHandlers);

    if (deletedRowCount > 1)
    {
        int rowIdx = itemsInRow.first()->row();
        successfulCommitHandlers << [rowIdx, deletedRowCount]()
        {
            notifyWarn(tr("Row %1: the INSTEAD OF DELETE trigger deleted more than one row (%2). The view does not uniquely identify the edited record.")
                       .arg(QString::number(rowIdx + 1), QString::number(deletedRowCount)));
        };
    }
    return true;
}

RowId SqlViewModel::getRowIdForRow(const QList<SqlQueryItem*>& itemsInRow)
{
    QList<SqlQueryItem*> rowAllItems = getRow(itemsInRow.first()->row());
    RowId rowId;
    for (SqlQueryItem* item : rowAllItems)
        rowId[item->getColumn()->displayName] = item->isUncommitted() ? item->getOldValue() : item->getValue();

    return rowId;
}

void SqlViewModel::scheduleInsteadOfTriggerInfoMsg(QList<CommitSuccessfulHandler>& successfulCommitHandlers)
{
    printInsteadOfTriggerInfo = true;
    successfulCommitHandlers << [this]()
    {
        if (!printInsteadOfTriggerInfo)
            return;

        notifyInfo(tr("The view has INSTEAD OF trigger(s) that handle editing. It's recommended to refresh data after commit to see the actual changes, because triggers may modify data in an unexpected way."));
        printInsteadOfTriggerInfo = false;
    };
}

void SqlViewModel::reviewEditingByTrigger(bool executionSuccessful)
{
    cachedFeatures = FILTERING;
    if (!executionSuccessful)
        return;

    SchemaResolver resolver(db);
    QList<SqliteCreateTriggerPtr> triggers = resolver.getParsedTriggersForView(database, view);
    if (triggers.isEmpty())
        return;

    for (const SqliteCreateTriggerPtr& trigger : triggers)
    {
        if (trigger->eventTime != SqliteCreateTrigger::Time::INSTEAD_OF || !trigger->event)
            continue;

        switch (trigger->event->type)
        {
            case SqliteCreateTrigger::Event::UPDATE:
            {
                for (SqlQueryModelColumnPtr& col : columns)
                    col->hasInsteadOfTrigger = true;

                break;
            }
            case SqliteCreateTrigger::Event::UPDATE_OF:
            {
                for (SqlQueryModelColumnPtr& col : columns)
                {
                    if (trigger->event->columnNames.contains(col->column, Qt::CaseInsensitive))
                        col->hasInsteadOfTrigger = true;
                }
                break;
            }
            case SqliteCreateTrigger::Event::DELETE:
                cachedFeatures |= DELETE_ROW;
                break;
            case SqliteCreateTrigger::Event::INSERT:
                cachedFeatures |= INSERT_ROW;
                break;
            case SqliteCreateTrigger::Event::null:
                break;
        }
    }
}

SqlQueryModel::Features SqlViewModel::features() const
{
    return cachedFeatures;
}

