#include "htmlbutton.h"

#include <QHBoxLayout>
#include <QLabel>
#include <QStyleOptionButton>
#include <QStylePainter>

HtmlButton::HtmlButton(QWidget* parent)
    : QAbstractButton(parent)
{
    setText(QString());

    auto* layout = new QHBoxLayout(this);
    layout->setContentsMargins(8, 4, 8, 4);
    layout->setSpacing(6);

    iconLabel = new QLabel(this);
    iconLabel->setAttribute(Qt::WA_TransparentForMouseEvents);
    iconLabel->setVisible(false);

    textLabel = new QLabel(this);
    textLabel->setTextFormat(Qt::RichText);
    textLabel->setAlignment(Qt::AlignLeft|Qt::AlignVCenter);
    textLabel->setAttribute(Qt::WA_TransparentForMouseEvents);
    textLabel->setWordWrap(true);
    textLabel->setSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred);

    sideLabel = new QLabel(this);
    sideLabel->setTextFormat(Qt::RichText);
    sideLabel->setAlignment(Qt::AlignRight|Qt::AlignVCenter);
    sideLabel->setAttribute(Qt::WA_TransparentForMouseEvents);
    sideLabel->setWordWrap(true);
    sideLabel->setSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred);

    layout->addWidget(iconLabel);
    layout->addWidget(textLabel, 1);
    layout->addWidget(sideLabel);

    setMouseTracking(true);
}

void HtmlButton::setHtml(const QString& html)
{
    textLabel->setText(html);
    updateGeometry();
}

void HtmlButton::setSideHtml(const QString& html)
{
    sideLabel->setText(html);
    updateGeometry();
}

void HtmlButton::setButtonIcon(const QIcon& icon, const QSize& size)
{
    if (!icon.isNull())
        iconLabel->setPixmap(icon.pixmap(size));

    iconLabel->setFixedSize(size);
    iconLabel->setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Fixed);
    iconLabel->setVisible(true);
    updateGeometry();
}

QSize HtmlButton::sizeHint() const
{
    return layout()->minimumSize();
}

QSize HtmlButton::minimumSizeHint() const
{
    return layout()->minimumSize();
}

void HtmlButton::paintEvent(QPaintEvent*)
{
    QStylePainter p(this);

    QStyleOptionButton opt;
    opt.initFrom(this);

    const bool checked = isChecked();
    const bool hovered = opt.state & QStyle::State_MouseOver;

    opt.text.clear();
    opt.icon = QIcon();

    if (isDown())
        opt.state |= QStyle::State_Sunken;
    else
        opt.state |= QStyle::State_Raised;

    if (checked)
        opt.features |= QStyleOptionButton::DefaultButton;
    else if (!hovered)
        opt.features |= QStyleOptionButton::Flat;

    p.drawControl(QStyle::CE_PushButton, opt);
}

void HtmlButton::enterEvent(QEnterEvent* event)
{
    QAbstractButton::enterEvent(event);
    update();
}

void HtmlButton::leaveEvent(QEvent* event)
{
    QAbstractButton::leaveEvent(event);
    update();
}

bool HtmlButton::isFlat() const
{
    return flat;
}

void HtmlButton::setFlat(bool newFlat)
{
    flat = newFlat;
}
