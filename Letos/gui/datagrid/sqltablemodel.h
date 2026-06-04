#ifndef SQLTABLEMODEL_H
#define SQLTABLEMODEL_H

#include "gui_global.h"
#include "sqldatasourcequerymodel.h"

class GUI_API_EXPORT SqlTableModel : public SqlDataSourceQueryModel
{
        Q_OBJECT
    public:
        explicit SqlTableModel(QObject *parent = 0);

        QString getTable() const;
        void setDatabaseAndTable(const QString& database, const QString& table);

        Features features() const;
        QString generateSelectQueryForItems(const QList<SqlQueryItem*>& items);
        QString generateInsertQueryForItems(const QList<SqlQueryItem*>& items);
        QString generateUpdateQueryForItems(const QList<SqlQueryItem*>& items);
        QString generateDeleteQueryForItems(const QList<SqlQueryItem*>& items);
        bool supportsModifyingQueriesInMenu() const;

    protected:
        bool commitAddedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, const QList<QVariant>& rowValues, const RowId& insertRowId,
                                       QList<SqlQueryModel::CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitDeletedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, int deletedRowCount,
                                         QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        RowId getRowIdForRow(const QList<SqlQueryItem*>& itemsInRow);

        QString getDataSource();
        QString getTableOrView();

    private:
        QString table;
        bool isWithOutRowIdTable = false;
};

#endif // SQLTABLEMODEL_H
