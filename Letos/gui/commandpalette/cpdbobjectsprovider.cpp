#include "cpdbobjectsprovider.h"
#include "services/dbmanager.h"
#include "iconmanager.h"
#include "dbtree/dbtree.h"
#include "db/sqlquery.h"

QList<CommandPalette::Entry*> CpDbObjectsProvider::getEntries(const QString& search)
{
    static_qstring(basicQueryTpl, "SELECT name, type FROM sqlite_schema WHERE lower(name) LIKE lower(:value)");
    static_qstring(tableCondTpl, " OR type = 'table'");
    static_qstring(idxCondTpl, " OR type = 'index'");
    static_qstring(trigCondTpl, " OR type = 'trigger'");
    static_qstring(viewCondTpl, " OR type = 'view'");

    QString query = basicQueryTpl;
    if (QString("table").contains(search, Qt::CaseInsensitive))
        query += tableCondTpl;

    if (QString("index").contains(search, Qt::CaseInsensitive))
        query += idxCondTpl;

    if (QString("trigger").contains(search, Qt::CaseInsensitive))
        query += trigCondTpl;

    if (QString("view").contains(search, Qt::CaseInsensitive))
        query += viewCondTpl;

    QList<CommandPalette::Entry*> entries;
    for (Db* db : DBLIST->getDbList())
    {
        // Edit properties of %1 database
        QString dbName = db->getName();
        if (dbName.contains(search, Qt::CaseInsensitive) || QString("database").contains(search, Qt::CaseInsensitive))
        {
            entries << new CommandPalette::SimpleEntry(
                           ICONS.DATABASE_EDIT,
                           dbName,
                           QObject::tr("Edit database properties", "command palette entry"),
                           10,
                           [db]() {DBTREE->editDb(db);});
        }

        if (!db->isOpen())
            continue;

        auto rows = db->exec(query, {QString(search).replace("%", "%%").prepend("%").append("%")});
        while (rows->hasNext())
        {
            auto row = rows->next();
            QString name = row->value("name").toString();
            QString type = row->value("type").toString();
            entries << new CommandPalette::SimpleEntry(
                            // Icon
                            (
                                type == "table" ? ICONS.TABLE :
                                type == "index" ? ICONS.INDEX :
                                type == "trigger" ? ICONS.TRIGGER :
                                type == "view" ? ICONS.VIEW :
                                QIcon()
                            ),

                            // Title
                            name,

                            // Details
                            (
                                type == "table" ? QObject::tr("Open table", "command palette entry") :
                                type == "index" ? QObject::tr("Edit index", "command palette entry") :
                                type == "trigger" ? QObject::tr("Edit trigger", "command palette entry") :
                                type == "view" ? QObject::tr("Open view", "command palette entry") :
                                QString()
                            ),

                            // Score
                            11,

                            // Callback
                            [&]() -> std::function<void()> {
                                if (type == "table")
                                    return [db, name]() {DBTREE->openTable(db, QString(), name);};
                                else if (type == "index")
                                    return [db, name]() {DBTREE->editIndex(db, QString(), name);};
                                else if (type == "trigger")
                                    return [db, name]() {DBTREE->editTrigger(db, QString(), name);};
                                else if (type == "view")
                                    return [db, name]() {DBTREE->openView(db, QString(), name);};
                                else
                                    return [] {};
                            }()
                        );
        }
    }

    return entries;
}
