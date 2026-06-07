#ifndef CPDBOBJECTSPROVIDER_H
#define CPDBOBJECTSPROVIDER_H

#include "commandpalette.h"

class CpDbObjectsProvider : public CommandPalette::Provider
{
    public:
        QList<CommandPalette::Entry*> getEntries(const QString& search);
};

#endif // CPDBOBJECTSPROVIDER_H
