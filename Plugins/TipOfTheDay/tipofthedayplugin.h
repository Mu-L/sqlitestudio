#ifndef TIPOFTHEDAYPLUGIN_H
#define TIPOFTHEDAYPLUGIN_H

#include "TipOfTheDay_global.h"
#include "plugins/genericplugin.h"
#include "plugins/generalpurposeplugin.h"
#include "plugins/uiconfiguredplugin.h"
#include "config_builder.h"


class QAction;

class QNetworkAccessManager;
CFG_CATEGORIES(TipOfTheDayConfig,
    CFG_CATEGORY(Totd,
        CFG_ENTRY(bool,               ShowOnStartup,   true)
        CFG_ENTRY(bool,               GetTipsOnline,   false) // false by default to avoid security concerns
        CFG_ENTRY(QStringList,        RecentlyShown,   QStringList())
    )
)

class TIPOFTHEDAY_EXPORT TipOfTheDayPlugin : public GenericPlugin, public GeneralPurposePlugin, public UiConfiguredPlugin
{
    Q_OBJECT
    LETOS_PLUGIN("TipOfTheDay.json")

    public:
        struct Tip
        {
            QString summary;
            QString content;

            bool operator==(const Tip&) const = default;
        };

        bool init();
        void deinit();
        QString getConfigUiForm() const;
        CfgMain* getMainUiConfig();
        void configDialogOpen();
        void configDialogClosed();
        void openTotdDialog(int idx);

        CFG_LOCAL_PERSISTABLE(TipOfTheDayConfig, cfg)

    private:
        void fetchOfflineTips();
        void fetchOnlineTips();
        QList<Tip> parseTipsMd(const QString& mdContent);

        static constexpr const char* openTotdUrl = "open_totd://";
        static constexpr const char* tipsUrl = "https://raw.githubusercontent.com/wiki/pawelsalawa/letos/Tips_&_Tricks.md";
        static constexpr const char* localTipsFile = ":/totd/OfflineTips.md";

        QAction* openTotdAction = nullptr;
        QNetworkAccessManager* netManager = nullptr;
        QList<Tip> tips;

    private slots:
        void openTotdDialog();
        void fetchtTips();
        void showOnStartup();
        void openTotdFromLink(const QString& link);
        void markAsRead(const QString& summary);

    signals:
        void tipsAvailable();
};

#endif // TIPOFTHEDAYPLUGIN_H
