#ifndef CPGLOBALACTIONSPROVIDER_H
#define CPGLOBALACTIONSPROVIDER_H

#include "commandpalette.h"

class CpGlobalActionsProvider : public CommandPalette::Provider
{
    public:
        QList<CommandPalette::Entry*> getEntries(const QString& search);
};

#endif // CPGLOBALACTIONSPROVIDER_H
