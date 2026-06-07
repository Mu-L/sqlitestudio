#include "cpmdiwindowsprovider.h"
#include "mdiarea.h"
#include "mainwindow.h"

QList<CommandPalette::Entry*> CpMdiWindowsProvider::getEntries(const QString& search)
{
    QList<CommandPalette::Entry*> entries;
    MdiWindow* cwin = MDIAREA->getCurrentWindow();
    for (MdiWindow*& win : MDIAREA->getWindows())
    {
        if (cwin == win)
            continue;

        QString title = win->windowTitle();
        if (title.contains(search, Qt::CaseInsensitive))
        {
            QIcon icon = win->windowIcon();
            entries << new CommandPalette::SimpleEntry(
                           icon,
                           title,
                           QObject::tr("Bring the window to front", "command palette entry"),
                           15,
                           [win]() {MDIAREA->setActiveSubWindow(win);});
        }
    }
    return entries;
}
