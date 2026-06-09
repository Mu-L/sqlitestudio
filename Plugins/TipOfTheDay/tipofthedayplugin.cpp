#include "tipofthedayplugin.h"
#include "common/global.h"
#include "mainwindow.h"
#include "tipofthedaydialog.h"
#include "services/notifymanager.h"
#include "statusfield.h"
#include <QAction>
#include <QFile>
#include <QIcon>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QRandomGenerator>

bool TipOfTheDayPlugin::init()
{
    SQLS_INIT_RESOURCE(tipoftheday);

    openTotdAction = new QAction(QIcon(":/icons/tipoftheday.svg"), tr("Tip of the Day..."), this);
    connect(openTotdAction, SIGNAL(triggered()), this, SLOT(openTotdDialog()));

    QAction* aboutAction = MAINWINDOW->getAction(MainWindow::ABOUT);
    MAINWINDOW->getLetosMenu()->insertAction(aboutAction, openTotdAction);

    netManager = new QNetworkAccessManager(this);

    connect(this, SIGNAL(tipsAvailable()), this, SLOT(showOnStartup()));
    connect(STATUSFIELD, SIGNAL(linkActivated(const QString&)), this, SLOT(openTotdFromLink(const QString&)));
    fetchtTips();

    return true;
}

void TipOfTheDayPlugin::deinit()
{
    SQLS_CLEANUP_RESOURCE(tipoftheday);
}

QString TipOfTheDayPlugin::getConfigUiForm() const
{
    return "TipOfTheDay";
}

CfgMain* TipOfTheDayPlugin::getMainUiConfig()
{
    return &cfg;
}

void TipOfTheDayPlugin::configDialogOpen()
{
}

void TipOfTheDayPlugin::configDialogClosed()
{
}

void TipOfTheDayPlugin::fetchOfflineTips()
{
    QFile localFile(localTipsFile);
    if (!localFile.open(QIODevice::ReadOnly))
    {
        qWarning() << "Unable to open offline tips file:" << localFile.errorString();
        return;
    }

    tips = parseTipsMd(localFile.readAll());
    if (!tips.isEmpty())
        emit tipsAvailable();
}

void TipOfTheDayPlugin::fetchOnlineTips()
{
    if (!cfg.Totd.GetTipsOnline.get())
    {
        fetchOfflineTips();
        return;
    }

    QNetworkReply* reply = netManager->get(QNetworkRequest(QUrl(tipsUrl)));
    connect(reply, &QNetworkReply::finished, this, [this, reply]()
    {
        reply->deleteLater();

        if (reply->error() != QNetworkReply::NoError)
        {
            qWarning() << "Failed to fetch tips online:" << reply->errorString();
            notifyWarn(tr("Could not download tips from the internet. Letos will use locally stored tips instead."));
            fetchOfflineTips();
            return;
        }

        const QByteArray payload = reply->readAll();
        tips = parseTipsMd(QString::fromUtf8(payload));
        if (!tips.isEmpty())
            emit tipsAvailable();
        else
            fetchOfflineTips();
    });
}

QList<TipOfTheDayPlugin::Tip> TipOfTheDayPlugin::parseTipsMd(const QString& mdContent)
{
    QList<Tip> parsedTips;
    QStringList tipLines;
    QString summary;
    QStringList lines = mdContent.trimmed().split("\n");
    for (const QString& line : lines)
    {
        if (line.startsWith("## "))
        {
            if (tipLines.size() > 0)
                parsedTips.append({summary, tipLines.join("\n").trimmed()});

            tipLines.clear();
            summary.clear();
        }

        if (line.startsWith("> ") && summary.isEmpty())
            summary = line.mid(2).trimmed();
        else
            tipLines += line;
    }

    if (tipLines.size() > 0)
        parsedTips.append({summary, tipLines.join("\n").trimmed()});

    return parsedTips;
}

void TipOfTheDayPlugin::openTotdDialog(int idx)
{
    TipOfTheDayDialog dialog(MAINWINDOW);
    connect(&dialog, SIGNAL(markAsRead(const QString&)), this, SLOT(markAsRead(const QString&)));
    dialog.setTips(tips);
    dialog.setCurrentIdx(idx);
    dialog.exec();
}

void TipOfTheDayPlugin::openTotdDialog()
{
    openTotdDialog(0);
}

void TipOfTheDayPlugin::fetchtTips()
{
    if (cfg.Totd.GetTipsOnline.get())
        fetchOnlineTips();
    else
        fetchOfflineTips();
}

void TipOfTheDayPlugin::showOnStartup()
{
    if (!cfg.Totd.ShowOnStartup.get() || tips.isEmpty())
        return;

    QStringList shownList = cfg.Totd.RecentlyShown.get();
    int idx = 0;
    if (!shownList.isEmpty())
    {
        if (shownList.size() >= tips.size())
        {
            // all tips were shown recently, start over
            shownList.clear();
        }

        // Prepare list of tips not shown yet and use random tip from that list,
        // then find what index is has in the tips list and use it
        QList<Tip> notShownList;
        for (const Tip& tip : tips)
        {
            if (!shownList.contains(tip.summary))
                notShownList << tip;
        }
        QRandomGenerator randGen;
        Tip tipToUse = notShownList[randGen.generate() % notShownList.size()];
        idx = tips.indexOf(tipToUse);
    }

    notifyInfo(tr("<b>Quick tip:</b> %1 - <a href=\"%2\">Learn more</a>").arg(tips[idx].summary, openTotdUrl + QString::number(idx)));
    shownList << tips[idx].summary;
    cfg.Totd.RecentlyShown.set(shownList);
}

void TipOfTheDayPlugin::openTotdFromLink(const QString& link)
{
    if (!link.startsWith(openTotdUrl))
        return;

    int idx = link.mid(strlen(openTotdUrl)).toInt();
    openTotdDialog(idx);
}

void TipOfTheDayPlugin::markAsRead(const QString& summary)
{
    QStringList shownList = cfg.Totd.RecentlyShown.get();
    if (!shownList.contains(summary))
    {
        shownList << summary;
        cfg.Totd.RecentlyShown.set(shownList);
        qDebug() << "marked, total" << shownList.size();
    }
}
