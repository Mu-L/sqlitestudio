#ifndef CPMDIWINDOWSPROVIDER_H
#define CPMDIWINDOWSPROVIDER_H

#include "commandpalette.h"

class CpMdiWindowsProvider : public CommandPalette::Provider
{
    public:
        QList<CommandPalette::Entry*> getEntries(const QString& search);
};

#endif // CPMDIWINDOWSPROVIDER_H
