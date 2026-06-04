#ifndef SQLVIEWMODEL_H
#define SQLVIEWMODEL_H

#include "gui_global.h"
#include "sqldatasourcequerymodel.h"

class GUI_API_EXPORT SqlViewModel : public SqlDataSourceQueryModel
{
    Q_OBJECT

    public:
        explicit SqlViewModel(QObject *parent = 0);

        QString getView() const;

        QString generateSelectQueryForItems(const QList<SqlQueryItem*>& items);
        void setDatabaseAndView(const QString& database, const QString& view);
        Features features() const;

    protected:
        QString getDataSource();
        QString getTableOrView();
        bool commitEditedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitAddedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitDeletedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers);

    private:
        void scheduleInsteadOfTriggerInfoMsg(QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitEditedRowAllColumnsByTrigger(const QList<SqlQueryItem*>& items, QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitEditedRowByTrigger(const QList<SqlQueryItem*>& items, const QStringList& trigColumns, QList<SqlQueryItem*>& itemsLeft, QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitAddedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, const QList<QVariant>& rowValues, const RowId& insertRowId,
                                       QList<SqlQueryModel::CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitDeletedRowPostprocess(const QList<SqlQueryItem*>& itemsInRow, int deletedRowCount,
                                         QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        RowId getRowIdForRow(const QList<SqlQueryItem*>& itemsInRow);

        QString view;
        Features cachedFeatures = FILTERING;
        bool printInsteadOfTriggerInfo = false;

    private slots:
        void reviewEditingByTrigger(bool executionSuccessful);
};

#endif // SQLVIEWMODEL_H
