#include "cpconfigdialogprovider.h"
#include "dialogs/configdialog.h"
#include "iconmanager.h"
#include "common/global.h"
#include "services/pluginmanager.h"
#include "formmanager.h"
#include "plugins/uiconfiguredplugin.h"
#include "mainwindow.h"
#include "services/config.h"
#include <QFile>
#include <QCoreApplication>
#include <QThreadPool>
#include <QTextDocument>

/*
 * TODO Providers to implement:
 * - snippets -> open SQL Editor with snippet
 */

CpConfigDialogProvider::CpConfigDialogProvider()
{
    if (PLUGINS->arePluginsInitiallyLoaded())
        init();
    else
        connect(PLUGINS, &PluginManager::pluginsInitiallyLoaded, this, &CpConfigDialogProvider::init);
}

QList<CommandPalette::Entry*> CpConfigDialogProvider::getEntries(const QString& search)
{
    static_qstring(configKeyword, "configure");
    static_qstring(hotkeyKeyword, "key");
    QTextDocument textDoc;
    QList<CommandPalette::Entry*> results;
    QList<IndexedEntry> allEntries = indexedEntries + indexedHotKeyEntries;;
    for (const QList<IndexedEntry>& pluginEntries : indexedPluginEntries.values())
        allEntries += pluginEntries;

    for (const IndexedEntry& idxEntry : allEntries)
    {
        bool generalMatch = idxEntry.setting.contains(search, Qt::CaseInsensitive) ||
                idxEntry.tooltip.contains(search, Qt::CaseInsensitive) ||
                idxEntry.categoryName.contains(search, Qt::CaseInsensitive) ||
                idxEntry.hotkey.contains(search, Qt::CaseInsensitive) ||
                configKeyword.contains(search, Qt::CaseInsensitive);

        bool hotkeyMatch = hotkeyKeyword.contains(search, Qt::CaseInsensitive);

        if ((generalMatch || hotkeyMatch) && !idxEntry.hotkey.isNull())
        {
            results << new CommandPalette::SimpleEntry(
                            ICONS.CONFIGURE,
                            tr("Configure hotkey: %1 (%2)").arg(QString(idxEntry.setting).replace("&", "&&"), QString(idxEntry.hotkey).replace("&", "&&")),
                            tr("Open configuration on the \"%1\" page").arg(QString(idxEntry.categoryName).replace("&", "&&")),
                            5,
                            [idxEntry]()
                            {
                                ConfigDialog* dialog = new ConfigDialog();
                                dialog->setAttribute(Qt::WA_DeleteOnClose, true);
                                dialog->setModal(true);
                                dialog->openAtSettingHotkey(idxEntry.categoryKey, idxEntry.setting);
                                dialog->show();
                            }
            );
        }
        else if (generalMatch && idxEntry.setting.isNull())
        {
            results << new CommandPalette::SimpleEntry(
                            ICONS.CONFIGURE,
                            tr("Configure: %1").arg(QString(idxEntry.categoryName).replace("&", "&&")),
                            tr("Open configuration on the \"%1\" page").arg(QString(idxEntry.categoryName).replace("&", "&&")),
                            5,
                            [idxEntry]()
                            {
                                ConfigDialog* dialog = new ConfigDialog();
                                dialog->setAttribute(Qt::WA_DeleteOnClose, true);
                                dialog->setModal(true);
                                dialog->openAtSettingCategory(idxEntry.categoryKey);
                                dialog->show();
                            }
            );
        }
        else if (generalMatch)
        {
            results << new CommandPalette::SimpleEntry(
                            ICONS.CONFIGURE,
                            tr("Configure: %1").arg(QString(idxEntry.setting).replace("&", "&&")),
                            tr("Open configuration on the \"%1\" page").arg(QString(idxEntry.categoryName).replace("&", "&&")),
                            5,
                            [idxEntry]()
                            {
                                ConfigDialog* dialog = new ConfigDialog();
                                dialog->setAttribute(Qt::WA_DeleteOnClose, true);
                                dialog->setModal(true);
                                dialog->openAtSettingWidget(idxEntry.categoryKey, idxEntry.settingWidget);
                                dialog->show();
                            }
            );
        }
    }

    return results;
}

void CpConfigDialogProvider::init()
{
    connect(PLUGINS, &PluginManager::loaded, this, &CpConfigDialogProvider::pluginLoaded);
    connect(PLUGINS, &PluginManager::aboutToUnload, this, &CpConfigDialogProvider::pluginToBeUnloaded);
    connect(CFG, &Config::massSaveCommitted, this, &CpConfigDialogProvider::collectHotKeys);

    // Initial indexing is done from a separate threat, as it indexes whole ConfigDialog,
    // including hotkeys and all loaded plugins. This could slow down UI startup by
    // ~100-200 ms on slower machines and is not necessary to be done
    // before the user opens Command Palette for the first time.
    QThreadPool::globalInstance()->start([this] {return indexConfig();});
}

QString CpConfigDialogProvider::translate(const QString& input)
{
    return qApp->translate("ConfigDialog", input.toUtf8().constData());
}

void CpConfigDialogProvider::indexConfig()
{
    QList<CpConfigDialogProvider::IndexedEntry> results;
    Navigator navigator = readConfigDialogUiXml();
    if (!navigator.isValid())
        return;

    QHash<QString, QString> categories = collectCategories(navigator);
    if (categories.isEmpty())
        return;

    shortcutsCategoryName = categories[SHORTCUTS_CATEGORY_KEY];

    collectWidgets(navigator, categories, results);
    collectHotKeys();

    for (PluginType* pluginType : PLUGINS->getPluginTypes())
    {
        for (Plugin* plugin : pluginType->getLoadedPlugins())
            pluginLoaded(plugin, pluginType);
    }

    indexedEntries = results;
}

CpConfigDialogProvider::Navigator CpConfigDialogProvider::readConfigDialogUiXml()
{
    return readConfigDialogUiXml(":/configform/dialogs/configdialog.ui");
}

CpConfigDialogProvider::Navigator CpConfigDialogProvider::readConfigDialogUiXml(const QString& uiPath)
{
    QDomDocument doc;
    QFile uiFile(uiPath);
    if (!uiFile.open(QIODevice::ReadOnly))
    {
        qWarning() << "Failed to open" << uiFile.fileName();
        return Navigator();
    }

    QString xml = QString::fromUtf8(uiFile.readAll());

    bool success;
    QString errorMsg;
    int errorLine;
    int errorColumn;

#if QT_VERSION >= QT_VERSION_CHECK(6, 5, 0)
    QDomDocument::ParseResult parseResult = doc.setContent(xml);
    errorMsg = parseResult.errorMessage;
    errorLine = parseResult.errorLine;
    errorColumn = parseResult.errorColumn;
    success = !!parseResult;
#else
    success = doc.setContent(xml, &errorMsg, &errorLine, &errorColumn);
#endif
    if (!success)
    {
        qWarning() << "Failed to parse:" << uiFile.fileName();
        qWarning() << "XML parse error:" << errorMsg
                    << "line:" << errorLine
                    << "column:" << errorColumn;
        return Navigator();
    }

    return Navigator(doc);
}

QHash<QString, QString> CpConfigDialogProvider::collectCategories(Navigator& navigator)
{
    QHash<QString, QString> categories;
    QDomNode tree = navigator.find("widget", "categoriesTree");
    if (tree.isNull())
    {
        qWarning() << "Failed to find categories tree in configdialog.ui";
        return categories;
    }

    QList<QDomNode> categoryNodes = navigator.findAll(tree.toElement(), "item");
    for (const QDomNode& node : categoryNodes)
    {
        QString catKey = navigator.findChildNode(node, "property", "statusTip").toElement().text();
        QString origCatName = navigator.findChildNode(node, "property", "text").toElement().text();
        QString catName = translate(origCatName);
        categories[catKey] = catName;
    }
    return categories;
}

bool CpConfigDialogProvider::collectWidgets(Navigator& navigator, const QHash<QString, QString>& categories, QList<IndexedEntry>& entries)
{
    for (const QString& catKey : categories.keys())
        collectWidgets(navigator, catKey, categories[catKey], entries);

    return true;
}

bool CpConfigDialogProvider::collectWidgets(Navigator& navigator, const QString& categKey, const QString& categName, QList<IndexedEntry>& entries)
{
    QDomNode categoryNode = navigator.find("widget", categKey);
    if (categoryNode.isNull())
        return false; // this category has no respective page/form, so it's not actually configurable

    entries << IndexedEntry{categKey, categName, QString(), QString(), QString(), QString()};

    QList<QDomNode> widgetsInCategory;
    widgetsInCategory += navigator.findAll(categoryNode.toElement(), "property", "text");
    widgetsInCategory += navigator.findAll(categoryNode.toElement(), "property", "title");

    QTextDocument textDoc;
    for (const QDomNode& widgetPropertyNode : widgetsInCategory)
    {
        QString ignore = navigator.findChildNode(widgetPropertyNode.parentNode(), "property", "cmdPalIgnore").toElement().text();
        if (ignore == "true")
            continue;

        QString origText = widgetPropertyNode.toElement().text();
        QString text = translate(origText);
        QString tooltip = navigator.findChildNode(widgetPropertyNode.parentNode(), "property", "toolTip").toElement().text();
        QString widgetName = widgetPropertyNode.parentNode().attributes().namedItem("name").nodeValue();

        // Strip HTML
        textDoc.setHtml(text);
        text = textDoc.toPlainText();
        if (!tooltip.trimmed().isEmpty())
        {
            textDoc.setHtml(tooltip);
            tooltip = textDoc.toPlainText();
        }

        entries << IndexedEntry{categKey, categName, widgetName, text, tooltip, QString()};
    }
    return true;
}

void CpConfigDialogProvider::collectHotKeys()
{
    QList<CfgMain*> cfgMains = ConfigDialog::getShortcutsCfgMains();
    QList<CfgEntry*> hotkeyEntries;
    for (CfgMain* cfgMain : cfgMains)
        hotkeyEntries += cfgMain->getEntries();

    QList<IndexedEntry> entries;
    for (CfgEntry* hkEntry : hotkeyEntries)
        entries << IndexedEntry{SHORTCUTS_CATEGORY_KEY, shortcutsCategoryName, SHORTCUTS_WIDGET, hkEntry->getTitle(), QString(), hkEntry->get().toString()};

    indexedHotKeyEntries = entries;
}

bool CpConfigDialogProvider::collectPluginWidgets(QHash<QString, QString>& categories, QList<IndexedEntry>& entries)
{
    for (PluginType*& pluginType : PLUGINS->getPluginTypes())
    {
        QList<UiConfiguredPlugin*> plugins = pluginType->getLoadedPlugins<UiConfiguredPlugin>();
        for (UiConfiguredPlugin* plugin : plugins)
        {
            QString cfgFormWidgetName = plugin->getConfigUiForm();
            if (!FORMS->hasWidget(cfgFormWidgetName))
                continue;

            QString path = FORMS->getFullPathForWidget(cfgFormWidgetName);
            Navigator navigator = readConfigDialogUiXml(path);
            if (!navigator.isValid())
                continue;

            Plugin* genericPlugin = dynamic_cast<Plugin*>(plugin);
            QString pluginName = genericPlugin->getName();
            QString pluginTitle = genericPlugin->getTitle();

            categories[pluginName] = pluginTitle;

            if (!collectWidgets(navigator, pluginName, pluginTitle, entries))
                qWarning() << "Unable to collect widgets from config page for plugin" << pluginName;
        }
    }

    return true;
}

void CpConfigDialogProvider::pluginLoaded(Plugin* plugin, PluginType* type)
{
    Q_UNUSED(type);

    UiConfiguredPlugin* uiPlugins = dynamic_cast<UiConfiguredPlugin*>(plugin);
    if (!uiPlugins)
        return;

    QString cfgFormWidgetName = uiPlugins->getConfigUiForm();
    if (!FORMS->hasWidget(cfgFormWidgetName))
        return;

    QString path = FORMS->getFullPathForWidget(cfgFormWidgetName);
    Navigator navigator = readConfigDialogUiXml(path);
    if (!navigator.isValid())
        return;

    QString pluginName = plugin->getName();
    QString pluginTitle = plugin->getTitle();

    indexedPluginEntries.remove(pluginName);
    if (!collectWidgets(navigator, cfgFormWidgetName, pluginTitle, indexedPluginEntries[pluginName]))
        qWarning() << "Unable to collect widgets from config page for plugin" << pluginName;
}

void CpConfigDialogProvider::pluginToBeUnloaded(Plugin* plugin, PluginType* type)
{
    Q_UNUSED(type);

    QString pluginName = plugin->getName();
    indexedPluginEntries.remove(pluginName);
}

CpConfigDialogProvider::Navigator::Navigator(const QDomDocument& dom) : dom(dom)
{
    if (!dom.isNull())
        valid = true;
}

QDomNode CpConfigDialogProvider::Navigator::find(const QString& tagName, const QString& name)
{
    QDomNodeList nodes = dom.elementsByTagName(tagName); // all nodes with tagName, not only direct childs
    for (int i = 0; i < nodes.count(); i++)
    {
        QDomNode node = nodes.at(i);
        if (node.attributes().namedItem("name").nodeValue() == name)
            return node;
    }
    return QDomNode();
}

QList<QDomNode> CpConfigDialogProvider::Navigator::findChildNodes(const QDomNode& parent, const QString& tagName)
{
    QList<QDomNode> results;
    QDomNodeList nodes = parent.childNodes(); // only direct childs
    for (int i = 0; i < nodes.count(); i++)
    {
        QDomNode node = nodes.at(i);
        if (node.nodeName() == tagName)
            results << node;
    }
    return results;
}

QList<QDomNode> CpConfigDialogProvider::Navigator::findAll(const QDomElement& parent, const QString& tagName, const QString& name)
{
    QList<QDomNode> results;
    QDomNodeList nodes = parent.elementsByTagName(tagName); // all nodes with tagName, not only direct childs
    for (int i = 0; i < nodes.count(); i++)
    {
        QDomNode node = nodes.at(i);
        if (node.attributes().namedItem("name").nodeValue() == name)
            results << node;
    }
    return results;
}

QList<QDomNode> CpConfigDialogProvider::Navigator::findAll(const QDomElement& parent, const QString& tagName)
{
    QList<QDomNode> results;
    QDomNodeList nodes = parent.elementsByTagName(tagName); // all nodes with tagName, not only direct childs
    for (int i = 0; i < nodes.count(); i++)
    {
        QDomNode node = nodes.at(i);
        results << node;
    }
    return results;
}

QDomNode CpConfigDialogProvider::Navigator::findChildNode(const QDomNode& parent, const QString& tagName, const QString& name)
{
    QDomNodeList nodes = parent.childNodes(); // only direct childs
    for (int i = 0; i < nodes.count(); i++)
    {
        QDomNode node = nodes.at(i);
        if (node.nodeName() == tagName &&
            node.attributes().namedItem("name").nodeValue() == name)
        {
            return node;
        }
    }
    return QDomNode();
}

bool CpConfigDialogProvider::Navigator::isValid() const
{
    return valid;
}
