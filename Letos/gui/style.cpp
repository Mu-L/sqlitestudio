#include "style.h"
#include "themetuner.h"
#include "mainwindow.h"
#include "syntaxhighlighterplugin.h"
#include "services/pluginmanager.h"
#include <QApplication>
#include <QToolTip>
#include <QDebug>

Style* Style::instance = nullptr;

Style* Style::getInstance()
{
    if (instance == nullptr)
        instance = new Style(QApplication::style());

    return instance;
}


bool Style::isDark(const QStyle* style)
{
    return style->standardPalette().text().color().value() >= 80;
}

const ExtendedPalette& Style::extendedPalette() const
{
    return extPalette;
}

void Style::setStyle(QStyle *style, const QString &styleName)
{
    setBaseStyle(style);

    QApplication::setPalette(initialPalette); // reset palette, cause styles don't provide
                                              // full palette when changed in runtime (i.e. windowsvista)

    extPalette.styleChanged(style, styleName); // after palette reset, refresh extpalette again

    QApplication::setStyle(this);
    QApplication::setPalette(standardPalette());
    QToolTip::setPalette(standardPalette());
    THEME_TUNER->tuneTheme(styleName);
    MAINWINDOW->getMdiArea()->setBackground(extPalette.mdiAreaBase());

    emit paletteChanged();
}

QString Style::name() const
{
    return baseStyle()->objectName();
}

bool Style::isDark() const
{
    return isDark(this);
}

bool Style::eventFilter(QObject *obj, QEvent *ev)
{
    Q_UNUSED(obj);
    if (ev->type() == QEvent::PaletteChange)
    {
        if (extPalette.styleChanged(this, name()))
            emit paletteChanged();
    }

    return false;
}

Style::Style(QStyle *style)
    : QProxyStyle(style)
{
    initialPalette = style->standardPalette();
    extPalette.styleChanged(this, name());
    qApp->installEventFilter(this);
}
