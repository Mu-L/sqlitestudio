#include "fusionlightplugin.h"
#include <QProxyStyle>
#include <QPalette>
#include <QDebug>
#include <QWizard>

class FusionLightStyle : public QProxyStyle
{
    public:
        FusionLightStyle();

        QPalette standardPalette() const;

    private:
        QPalette darkPalette;
};

FusionLightStyle::FusionLightStyle()
    : QProxyStyle("fusion")
{
    setObjectName(FusionLightPlugin::STYLE_NAME);

    QColor lightGray(210, 210, 210);
    QColor gray(128, 128, 128);
    QColor midDarkGray(100, 100, 100);
    QColor darkGray(53, 53, 53);
    QColor black(25, 25, 25);
    QColor blue(42, 130, 218);
    QColor tooltipBase(255, 255, 220);

    // darkPalette.setColor(QPalette::Window, darkGray);
    darkPalette.setColor(QPalette::Window, lightGray);
    darkPalette.setColor(QPalette::WindowText, Qt::black);
    darkPalette.setColor(QPalette::Base, Qt::white);
    darkPalette.setColor(QPalette::AlternateBase, lightGray.lighter(150));
    darkPalette.setColor(QPalette::ToolTipBase, tooltipBase);
    darkPalette.setColor(QPalette::ToolTipText, Qt::black);
    darkPalette.setColor(QPalette::Text, Qt::black);
    darkPalette.setColor(QPalette::Button, gray.lighter(170));
    darkPalette.setColor(QPalette::ButtonText, Qt::black);
    darkPalette.setColor(QPalette::Link, blue);
    darkPalette.setColor(QPalette::Highlight, blue);
    darkPalette.setColor(QPalette::HighlightedText, Qt::white);
    darkPalette.setColor(QPalette::Light, gray.lighter());
    darkPalette.setColor(QPalette::Dark, gray.darker(150));

    darkPalette.setColor(QPalette::Disabled, QPalette::ButtonText, gray);
    darkPalette.setColor(QPalette::Disabled, QPalette::WindowText, gray);
    darkPalette.setColor(QPalette::Disabled, QPalette::Text, gray);
    darkPalette.setColor(QPalette::Disabled, QPalette::Light, gray);
}

QPalette FusionLightStyle::standardPalette() const
{
    return darkPalette;
}

FusionLightPlugin::FusionLightPlugin(QObject *parent)
    : QStylePlugin(parent)
{
}

FusionLightPlugin::~FusionLightPlugin()
{
}

QStyle *FusionLightPlugin::create(const QString &key)
{
    if (key.toLower() == STYLE_NAME)
        return new FusionLightStyle();

    return nullptr;
}
