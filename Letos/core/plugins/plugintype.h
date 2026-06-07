#ifndef PLUGINTYPE_H
#define PLUGINTYPE_H

#include "core_global.h"
#include <QList>
#include <QString>
#include <QObject>
#include <typeinfo>

class Plugin;

template <class T>
class DefinedPluginType;

class API_EXPORT PluginType
{
    public:
        virtual ~PluginType();

        QString getName() const;
        QString getTitle() const;
        QString getConfigUiForm() const;
        QList<Plugin*> getLoadedPlugins() const;
        QStringList getAllPluginNames() const;

        template <class T>
        QList<T*> getLoadedPlugins() const
        {
            QList<T*> typedPlugins;
            for (Plugin* plugin : getLoadedPlugins())
            {
                T* casted = dynamic_cast<T*>(plugin);
                if (casted)
                    typedPlugins << casted;
            }

            return typedPlugins;
        }

        virtual bool test(Plugin* plugin) = 0;

        template <class T>
        bool isForPluginType()
        {
            return dynamic_cast<const DefinedPluginType<T>*>(this) != nullptr;
        }

        static bool nameLessThan(PluginType* type1, PluginType* type2);

    protected:
        PluginType(const QString& title, const QString& form);
        void setNativeName(const QString& nativeName);

        QString title;
        QString configUiForm;
        QString name;
};


template <class T>
class DefinedPluginType : public PluginType
{
    friend class PluginManager;

    public:
        bool test(Plugin* plugin)
        {
            return (dynamic_cast<T*>(plugin) != nullptr);
        }

    protected:
        DefinedPluginType(const QString& title, const QString& form) : PluginType(title, form)
        {
            setNativeName(typeid(T).name());
        }
};

#endif // PLUGINTYPE_H
