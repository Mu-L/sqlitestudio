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
        return commitEditedRowAllColumnsByTrigger(itemsInRow);

    QList<SqlQueryItem*> itemsLeft;
    bool trigRes = commitEditedRowByTrigger(itemsInRow, columnsCoveredByTriggers, itemsLeft);
    return trigRes && (itemsLeft.isEmpty() || SqlDataSourceQueryModel::commitEditedRow(itemsLeft, successfulCommitHandlers));
}

bool SqlViewModel::commitEditedRowAllColumnsByTrigger(const QList<SqlQueryItem*>& items)
{
    CommitUpdateQueryBuilder queryBuilder;
    queryBuilder.addReturningConst(); // to quickly return number of affected rows
    queryBuilder.setDatabase(getDatabaseForCommit(database));
    queryBuilder.setTable(wrapObjName(view));

    // RowId used for update using trigger
    int rowIdx = items.first()->index().row();
    QList<SqlQueryItem*> rowAllItems = getRow(rowIdx);
    RowId trigRowId;
    for (SqlQueryItem* item : rowAllItems)
        trigRowId[item->getColumn()->displayName] = item->isUncommitted() ? item->getOldValue() : item->getValue();

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
        notifyWarn(tr("Row %1: the INSTEAD OF UPDATE trigger modified more than one row (%2). The view does not uniquely identify the edited record.")
                   .arg(QString::number(rowIdx + 1), QString::number(updateCount)));

    // Actual ROWID (or basically any values in the committed row) may be changed by the trigger, but it's practically impossible to find out
    // which columns were changed and in what way. For now the approach is to have the user refresh data if he's aware of such triggers
    // and wants to see the actual data after commit.
    // It's the least risky approach, because trying to guess how the trigger modified the data may lead to incorrect values in the model,
    // which is even worse than not refreshing data at all.
    // Automatic refreshing may be undesired, because it could be a long-running query.

    return true;
}

bool SqlViewModel::commitEditedRowByTrigger(const QList<SqlQueryItem*>& items, const QStringList& trigColumns, QList<SqlQueryItem*>& itemsLeft)
{
    QList<SqlQueryItem*> itemsToCommit;
    for (SqlQueryItem* item : items)
    {
        if (trigColumns.contains(item->getColumn()->displayName, Qt::CaseInsensitive))
           itemsToCommit << item;
        else
           itemsLeft << item;
    }
    return commitEditedRowAllColumnsByTrigger(itemsToCommit);
}

void SqlViewModel::reviewEditingByTrigger(bool executionSuccessful)
{
    if (!executionSuccessful)
        return;

    SchemaResolver resolver(db);
    QList<SqliteCreateTriggerPtr> triggers = resolver.getParsedTriggersForView(database, view);
    if (triggers.isEmpty())
        return;

    bool hasInsteadOfTrigger = false;
    for (const SqliteCreateTriggerPtr& trigger : triggers)
    {
        if (trigger->eventTime != SqliteCreateTrigger::Time::INSTEAD_OF || !trigger->event)
            continue;

        if (trigger->event->type == SqliteCreateTrigger::Event::UPDATE)
        {
            for (SqlQueryModelColumnPtr& col : columns)
                col->hasInsteadOfTrigger = true;

            return;
        }

        if (trigger->event->type == SqliteCreateTrigger::Event::UPDATE_OF)
        {
            for (SqlQueryModelColumnPtr& col : columns)
            {
                if (trigger->event->columnNames.contains(col->column, Qt::CaseInsensitive))
                    col->hasInsteadOfTrigger = true;
            }
        }
    }

}
