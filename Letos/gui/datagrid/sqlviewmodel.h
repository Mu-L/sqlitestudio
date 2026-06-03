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

    protected:
        QString getDataSource();
        bool commitEditedRow(const QList<SqlQueryItem*>& itemsInRow, QList<CommitSuccessfulHandler>& successfulCommitHandlers);
        bool commitEditedRowAllColumnsByTrigger(const QList<SqlQueryItem*>& items);
        bool commitEditedRowByTrigger(const QList<SqlQueryItem*>& items, const QStringList& trigColumns, QList<SqlQueryItem*>& itemsLeft);

    private:
        QString view;

    private slots:
        void reviewEditingByTrigger(bool executionSuccessful);
};

#endif // SQLVIEWMODEL_H
