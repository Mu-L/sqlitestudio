#ifndef CPCONFIGDIALOGPROVIDER_H
#define CPCONFIGDIALOGPROVIDER_H

#include "commandpalette.h"
#include <QDomDocument>

class PluginType;
class Plugin;
class CpConfigDialogProvider : public QObject, public CommandPalette::Provider
{
    public:
        CpConfigDialogProvider();

        QList<CommandPalette::Entry*> getEntries(const QString& search) override;

    private:
        struct IndexedEntry
        {
            QString categoryKey;
            QString categoryName;
            QString settingWidget;
            QString setting;
            QString tooltip;
            QString hotkey;
        };

        class Navigator
        {
            public:
                Navigator() = default;
                Navigator(const QDomDocument& dom);

                QDomNode find(const QString& tagName, const QString& name);
                QList<QDomNode> findChildNodes(const QDomNode& parent, const QString& tagName);
                QList<QDomNode> findAll(const QDomElement& parent, const QString& tagName, const QString& name);
                QList<QDomNode> findAll(const QDomElement& parent, const QString& tagName);
                QDomNode findChildNode(const QDomNode& parent, const QString& tagName, const QString& name);
                bool isValid() const;

            private:
                bool valid = false;
                QDomDocument dom;
        };

        void indexConfig();
        Navigator readConfigDialogUiXml();
        Navigator readConfigDialogUiXml(const QString& uiPath);
        QHash<QString, QString> collectCategories(Navigator& navigator);
        bool collectWidgets(Navigator& navigator, const QHash<QString, QString>& categories, QList<CpConfigDialogProvider::IndexedEntry>& entries);
        bool collectWidgets(Navigator& navigator, const QString& categKey, const QString& categName, QList<CpConfigDialogProvider::IndexedEntry>& entries);
        bool collectPluginWidgets(QHash<QString, QString>& categories, QList<CpConfigDialogProvider::IndexedEntry>& entries);
        QString translate(const QString& input);

        QList<IndexedEntry> indexedEntries;
        QList<IndexedEntry> indexedHotKeyEntries;
        QHash<QString, QList<IndexedEntry>> indexedPluginEntries;
        QString shortcutsCategoryName;

        static constexpr const char* SHORTCUTS_CATEGORY_KEY = "shortcutsPage";
        static constexpr const char* SHORTCUTS_WIDGET = "shortcutsTable";

    private slots:
        void init();
        void collectHotKeys();
        void pluginLoaded(Plugin* plugin, PluginType* type);
        void pluginToBeUnloaded(Plugin* plugin, PluginType* type);
};

#endif // CPCONFIGDIALOGPROVIDER_H
