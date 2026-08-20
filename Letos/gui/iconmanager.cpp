#include "iconmanager.h"
#include "letos.h"
#include "services/extralicensemanager.h"
#include "services/pluginmanager.h"
#include "common/global.h"
#include "common/utils.h"
#include "style.h"
#include "uiconfig.h"
#include <QApplication>
#include <QDir>
#include <QString>
#include <QIcon>
#include <QMovie>
#include <QDebug>
#include <QPainter>
#include <QStandardPaths>
#include <QJsonDocument>
#include <QJsonArray>

IconManager* IconManager::instance = nullptr;

IconManager* IconManager::getInstance()
{
    if (instance == nullptr)
        instance = new IconManager();

    return instance;
}

QString IconManager::getFilePathForName(const QString& name)
{
    return paths[name];
}

IconManager::IconManager()
{
}

void IconManager::scanIconSets(const QString& dirPath)
{
    QDir dir(dirPath);
    QFileInfoList entryList = dir.entryInfoList(QDir::AllDirs|QDir::NoDotAndDotDot|QDir::Readable);
    for (QFileInfo& entry : entryList)
        scanIconSet(entry.filePath());
}

void IconManager::scanIconSet(const QString& dirPath)
{

    QDir dir(dirPath);
    QFile metaFile(dir.filePath("meta.json"));
    if (!metaFile.exists())
    {
        qWarning() << "Icon set" << dir.dirName() << "does not contain meta.json file, skipping.";
        return;
    }

    IconSetMetadata meta;
    meta.dirPath = dirPath;
    if (!metaFile.open(QIODevice::ReadOnly | QIODevice::Text))
    {
        qWarning() << "Failed to open meta.json for icon set" << dir.dirName() << ", skipping.";
        return;
    }

    QByteArray jsonData = metaFile.readAll();
    QJsonDocument doc = QJsonDocument::fromJson(jsonData);
    if (doc.isNull() || !doc.isObject())
    {
        qWarning() << "Failed to parse meta.json for icon set" << dir.dirName() << ", skipping.";
        return;
    }

    QJsonObject obj = doc.object();
    meta.name = obj.value("name").toString();
    meta.author = obj.value("author").toString();
    meta.license = obj.value("license").toString();
    meta.url = obj.value("url").toString();
    meta.description = obj.value("description").toString();

    if (iconSets.contains(dir.dirName()))
    {
        qWarning() << "Icon set with path" << dir.dirName() << "already exists (" << iconSets[dir.dirName()].name << "). Skipping icon set" << meta.name;
        return;
    }

    loadSampleIconsToIconSet(dir, meta);

    iconSets[dir.dirName()] = meta;

    QString licName = QString("%1 (%2)").arg(meta.name, meta.license);
    if (QFile::exists(dir.filePath("license.txt")))
        LETOS->getExtraLicenseManager()->addLicense(licName, dir.filePath("license.txt"));
    else
        LETOS->getExtraLicenseManager()->addLicenseContents(licName, meta.description);
}

void IconManager::init()
{
    Icon::init();

#ifdef UNIX_FAV
    // AppDataLocation, but APPNAME should be a fixed value
    for (const QString& path : QStandardPaths::standardLocations(QStandardPaths::GenericDataLocation))
    {
        iconDirs += QDir::cleanPath(path + "/letos/img");
        iconDirs += QDir::cleanPath(path + "/sqlitestudio/img");
    }
#else
    iconDirs += QDir::cleanPath(QCoreApplication::applicationDirPath() + "/img");
#endif

    iconDirs += ":/icons";

    for (const QString& varName : {"LETOS_ICONS", "SQLITESTUDIO_ICONS"})
    {
        QString envDirs = LETOS->getEnv(varName);
        if (!envDirs.isNull())
            iconDirs += envDirs.split(PATH_LIST_SEPARATOR);
    }

#ifdef ICONS_DIR
    iconDirs += ICONS_DIR;
#endif

    iconFileExtensions << "*.svg" << "*.SVG" << "*.png" << "*.PNG" << "*.jpg" << "*.JPG";
    movieFileExtensions << "*.gif" << "*.GIF" << "*.mng" << "*.MNG";
    iconExtensionOnlyList = iconFileExtensions | MAP(e, {return e.mid(1);});

    sampleIconSetIcons = {
        &iconEnums.DATABASE,
        &iconEnums.TABLE,
        &iconEnums.COLUMN,
        &iconEnums.FUNCTION,
        &iconEnums.TRIGGER,
        &iconEnums.VIEW,
        &iconEnums.DIRECTORY_OPEN,
        &iconEnums.CONFIGURE
    };

    initIconSets();

    for (QString& dirPath : iconDirs)
        loadRecurently(dirPath, "", false);

    Icon::loadAll();
    enableRescanning();
}

QStringList IconManager::getIconDirs() const
{
    return iconDirs;
}

IconManager::IconSetMetadata& IconManager::getIconSet(const QString& key)
{
    return iconSets[key];
}

const QHash<QString, IconManager::IconSetMetadata>& IconManager::getAvailableIconSets() const
{
    return iconSets;
}

void IconManager::rescanResources(const QString& pluginName)
{
    if (!pluginName.isNull() && PLUGINS->isBuiltIn(pluginName))
        return;

    QStringList pluginMovies = pluginResourceMovies[pluginName];
    pluginResourceMovies.remove(pluginName);
    for (const QString& name : pluginMovies)
    {
        movies[name]->deleteLater();
        movies.remove(name);
    }

    QStringList pluginIcons = pluginResourceIcons[pluginName];
    pluginResourceIcons.remove(pluginName);
    for (const QString& name : pluginIcons)
        icons.remove(name);

    loadRecurently(":/icons", "", true);

    emit rescannedFor(pluginName);
}

void IconManager::rescanResources(Plugin* plugin, PluginType* pluginType)
{
    Q_UNUSED(pluginType);
    rescanResources(plugin->getName());
}

void IconManager::pluginsAboutToMassUnload()
{
    disconnect(PLUGINS, SIGNAL(loaded(Plugin*,PluginType*)), this, SLOT(rescanResources(Plugin*,PluginType*)));
    disconnect(PLUGINS, SIGNAL(unloaded(QString,PluginType*)), this, SLOT(rescanResources(QString)));
}

void IconManager::loadRecurently(QString dirPath, const QString& prefix, bool onlyNew)
{
    loadRecurently(dirPath, prefix, true, onlyNew);
    loadRecurently(dirPath, prefix, false, onlyNew);
}

void IconManager::loadRecurently(QString dirPath, const QString& prefix, bool movie, bool onlyNew)
{
    QStringList extensions = movie ? movieFileExtensions : iconFileExtensions;
    QDir dir(dirPath);
    QFileInfoList entryList = dir.entryInfoList(extensions, QDir::AllDirs|QDir::Files|QDir::NoDotAndDotDot|QDir::Readable);
    sSort(entryList, [](const QFileInfo &e1, const QFileInfo &e2)
    {
        return e1.baseName() < e2.baseName();
    });

    for (QFileInfo& entry : entryList)
    {
        if (entry.isDir())
        {
            loadRecurently(entry.absoluteFilePath(), prefix+entry.fileName()+"_", movie, onlyNew);
            continue;
        }

        QString path = getPathForCurrentIconSet(entry);
        QString name = entry.baseName();
        QString realName = name.contains("@") ? name.left(name.indexOf("@")) : name;
        if (icons.contains(realName))
        {
            if (!onlyNew)
                qWarning() << "Skipping icon" << name << "because it's already loaded, even though app is now loading all icons.";

            continue;
        }

        if (movie)
        {
            paths[name] = path;
            movies[name] = new QMovie(path);
        }
        else if (realName != name)
        {
            if (!icons.contains(realName))
            {
                qWarning() << "Failed to load additional icon size" << name << "because base size icon" << realName << "was not loaded.";
                continue;
            }
            QIcon icon = icons[realName];
            int dim = name.mid(name.indexOf("@") + 1).toInt();
            QSize size = QSize(dim, dim);
            icon.addFile(path, size);
        }
        else
        {
            paths[name] = path;
            icons[name] = QIcon(path);
            svgs[name] = entry.fileName().toLower().endsWith(".svg");
        }

        if (path.startsWith(":/"))
        {
            if (movie)
                resourceMovies << name;
            else
                resourceIcons << name;
        }
    }
}

void IconManager::enableRescanning()
{
    connect(PLUGINS, SIGNAL(loaded(Plugin*,PluginType*)), this, SLOT(rescanResources(Plugin*,PluginType*)));
    connect(PLUGINS, SIGNAL(unloaded(QString,PluginType*)), this, SLOT(rescanResources(QString)));
    connect(PLUGINS, SIGNAL(aboutToQuit()), this, SLOT(pluginsAboutToMassUnload()));
}

QString IconManager::getPathForCurrentIconSet(const QFileInfo& entry) const
{
    if (currentIconSet.isEmpty())
        return entry.absoluteFilePath();

    QString path = currentIconSetDir.filePath(entry.fileName());
    if (!QFile::exists(path))
        return entry.absoluteFilePath();

    return path;
}

void IconManager::initIconSets()
{
    // Default, built-in icon set
    IconSetMetadata meta;
    meta.author = "letos.org";
    meta.dirPath = "";
    meta.name = "Letos 4.0.0";
    meta.url = "https://www.svgrepo.com";
    meta.license = "Public Domain/Open Source";
    meta.description = tr("Mix of icons from various sources, including svgrepo.com and other open-source icon sets.");
    loadSampleIconsToIconSet(QDir(":/icons/img"), meta);
    iconSets[meta.dirPath] = meta;

    // Scan for other icon sets
    QStringList iconSetPaths = {
        ":/iconsets",
        QDir::cleanPath(qApp->applicationDirPath() + "/iconsets")
    };
    for (QString& dirPath : iconSetPaths)
        scanIconSets(dirPath);

    // For 4.0.1 release, for dark style the icons8 becomes default iconset if it's available (only official letos.org builds due to licensing)
    if (CFG_UI.General.IconSet.get().isNull() && iconSets.contains("icons8"))
        CFG_UI.General.IconSet.set("icons8");

    // Apply Icon Set
    currentIconSet = CFG_UI.General.IconSet.get();
    if (currentIconSet.isEmpty())
    {
        currentIconSet = meta.dirPath;
        CFG_UI.General.IconSet.set(currentIconSet);
    }

    currentIconSetDir = QDir(iconSets[currentIconSet].dirPath);
}

void IconManager::loadSampleIconsToIconSet(const QDir& dir, IconSetMetadata& iconSet)
{
    static_qstring(extTpl, "%1%2");
    for (const Icon*& icon : sampleIconSetIcons)
    {
        for (QString& ext : iconExtensionOnlyList)
        {
            QString iconFilePath = extTpl.arg(dir.filePath(icon->getFileName()), ext);
            if (!QFile::exists(iconFilePath))
                continue;

            iconSet.sampleIcons << QIcon(iconFilePath);
            break;
        }
    }
}

QMovie* IconManager::getMoviePtr(const QString& name)
{
    if (!movies.contains(name))
        qCritical() << "Movie missing:" << name;

    return movies[name];
}

QIcon IconManager::getIcon(const QString& name, const QString& fallbackPath)
{
    if (icons.contains(name))
        return icons[name];

    if (!currentIconSet.isEmpty())
    {
        for (QString& ext : iconFileExtensions)
        {
            QString path = currentIconSetDir.filePath(name + ext.mid(1));
            if (QFile::exists(path))
                return QIcon(path);
        }
    }

    if (!fallbackPath.isEmpty())
    {
        if (QFile::exists(fallbackPath))
            return QIcon(fallbackPath);
        else
            qCritical() << "Fallback path " << fallbackPath << "for icon" << name << "does not exist.";
    }

    qCritical() << "Icon missing:" << name;
    return QIcon();
}

bool IconManager::isSvg(const QString& name) const
{
    return svgs[name];
}

bool IconManager::isMovie(const QString& name)
{
    return movies.contains(name);
}
