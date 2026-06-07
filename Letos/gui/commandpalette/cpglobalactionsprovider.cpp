#include "cpglobalactionsprovider.h"
#include "mainwindow.h"
#include "dbtree/dbtree.h"

QList<CommandPalette::Entry*> CpGlobalActionsProvider::getEntries(const QString& search)
{
    QList<CommandPalette::Entry*> entries;

    for (int actEnum : MAINWINDOW->getActionsForCommandPalette())
    {
        QAction* action = MAINWINDOW->getAction(actEnum);
        if (!action || !action->isEnabled())
            continue;

        QString title = action->iconText();
        if (title.contains(search, Qt::CaseInsensitive))
        {
            QIcon icon = action->icon();
            entries << new CommandPalette::SimpleEntry(
                           icon,
                           title,
                           QString(),
                           action->shortcut().toString(QKeySequence::NativeText),
                           15,
                           [action]() {action->trigger();});
        }
    }

    for (int actEnum : DBTREE->getActionsForCommandPalette())
    {
        QAction* action = DBTREE->getAction(actEnum);
        if (!action || !action->isEnabled())
            continue;

        QString title = action->iconText();
        if (title.contains(search, Qt::CaseInsensitive))
        {
            QIcon icon = action->icon();
            entries << new CommandPalette::SimpleEntry(
                           icon,
                           title,
                           QString(),
                           action->shortcut().toString(QKeySequence::NativeText),
                           15,
                           [action]() {action->trigger();});
        }
    }

    return entries;
}
