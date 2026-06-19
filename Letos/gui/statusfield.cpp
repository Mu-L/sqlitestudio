#include "statusfield.h"
#include "ui_statusfield.h"
#include "uiconfig.h"
#include "iconmanager.h"
#include "themetuner.h"
#include "common/tablewidget.h"
#include "services/notifymanager.h"
#include "common/mouseshortcut.h"
#include <QMenu>
#include <QAction>
#include <QDateTime>
#include <QLabel>
#include <QVariantAnimation>
#include <QDebug>
#include <QPainter>
#include <QMouseEvent>
#include <QAbstractTextDocumentLayout>

StatusField::StatusField(QWidget *parent) :
    QDockWidget(parent),
    ui(new Ui::StatusField)
{
    ui->setupUi(this);
    setupMenu();
    ui->tableWidget->horizontalHeader()->setSectionResizeMode(1, QHeaderView::ResizeToContents);
    ui->tableWidget->verticalHeader()->setSectionResizeMode(QHeaderView::ResizeToContents);
    ui->tableWidget->viewport()->setMouseTracking(true);
    ui->tableWidget->setItemDelegateForColumn(2,
                                              new HtmlDelegate(ui->tableWidget->viewport(),
                                                [this](const QString& link)
                                                {
                                                      emit linkActivated(link);
                                                })
                                              );

    NotifyManager* nm = NotifyManager::getInstance();
    connect(nm, SIGNAL(notifyInfo(QString)), this, SLOT(info(QString)));
    connect(nm, SIGNAL(notifyError(QString)), this, SLOT(error(QString)));
    connect(nm, SIGNAL(notifyWarning(QString)), this, SLOT(warn(QString)));
    connect(CFG_UI.Fonts.StatusField, SIGNAL(changed(QVariant)), this, SLOT(fontChanged(QVariant)));
    MouseShortcut::forWheel(Qt::ControlModifier, this, SLOT(fontSizeChangeRequested(int)), ui->tableWidget->viewport());

    THEME_TUNER->manageCompactLayout(widget());

    fadeOutTimer.setInterval(fadeOutTimerInterval);
    fadeOutTimer.setSingleShot(true);
    fadeOutTimer.start();

    readRecentMessages();
}

bool StatusField::hasMessages() const
{
    return ui->tableWidget->rowCount() > 0;
}

void StatusField::suspend()
{
    suspended = true;
}

void StatusField::resume()
{
    suspended = false;
}

void StatusField::blockFadeOutFor(QObject* blocker)
{
    fadeOutOldMessages();
    fadeOutBlockers << blocker;
}

void StatusField::releaseFadeOutFor(QObject* blocker)
{
    fadeOutBlockers.removeOne(blocker);
}

StatusField::~StatusField()
{
    delete ui;
}

void StatusField::changeEvent(QEvent *e)
{
    QDockWidget::changeEvent(e);
    switch (e->type()) {
        case QEvent::LanguageChange:
            ui->retranslateUi(this);
            break;
        default:
            break;
    }
}

void StatusField::info(const QString &text)
{
    if (suspended)
        return;

    addEntry(ICONS.STATUS_INFO, text, style()->standardPalette().text().color(), INFO);
}

void StatusField::warn(const QString &text)
{
    if (suspended)
        return;

    addEntry(ICONS.STATUS_WARNING, text, style()->standardPalette().text().color(), WARN);
}

void StatusField::error(const QString &text)
{
    if (suspended)
        return;

    addEntry(ICONS.STATUS_ERROR, text, QColor(Qt::red), ERROR);
}

void StatusField::addEntry(const QIcon &icon, const QString &text, const QColor& color, EntryRole role)
{
    if (fadeOutTimer.remainingTime() <= 0)
        fadeOutOldMessages();

    int row = ui->tableWidget->rowCount();
    ui->tableWidget->setRowCount(row+1);

    if (row > itemCountLimit)
    {
        ui->tableWidget->removeRow(0);
        row--;
    }

    QList<QTableWidgetItem*> itemsCreated;
    QTableWidgetItem* item = nullptr;

    item = new QTableWidgetItem();
    item->setIcon(icon);
    item->setData(ENTRY_ROLE, role);
    ui->tableWidget->setItem(row, 0, item);
    itemsCreated << item;

    QFont font = CFG_UI.Fonts.StatusField.get();

    QString timeStr = "[" + QDateTime::currentDateTime().toString(timeStampFormat) + "]";
    item = new QTableWidgetItem(timeStr);
    item->setForeground(QBrush(color));
    item->setFont(font);
    item->setData(ENTRY_ROLE, role);
    ui->tableWidget->setItem(row, 1, item);
    itemsCreated << item;

    item = new QTableWidgetItem();
    item->setForeground(QBrush(color));
    item->setFont(font);
    item->setData(ENTRY_ROLE, role);
    item->setText(text);
    ui->tableWidget->setItem(row, 2, item);
    itemsCreated << item;

    if (CFG_UI.General.AutoOpenStatusField.get())
        setVisible(true);

    ui->tableWidget->scrollToBottom();

    fadeOutTimer.start();
}

void StatusField::refreshColors()
{
    const QColor stdColor = style()->standardPalette().text().color();
    const QColor errColor = QColor(Qt::red);
    const QColor stdDeprColor = style()->standardPalette().color(QPalette::Disabled, QPalette::Text);
    const QColor errDeprColor = QColor(255, 0, 0, 96);
    for (QTableWidgetItem* item : ui->tableWidget->findItems("", Qt::MatchContains))
    {
        EntryRole role = (EntryRole)item->data(ENTRY_ROLE).toInt();
        bool deprecated = item->data(DEPRECATED).toBool();
        QColor colorToSet = deprecated ?
                    (role == ERROR ? errDeprColor : stdDeprColor) :
                    (role == ERROR ? errColor : stdColor);

        item->setForeground(colorToSet);
    }
}

void StatusField::setupMenu()
{
    menu = new QMenu(this);

    copyAction = new QAction(ICONS.ACT_COPY, tr("Copy"), ui->tableWidget);
    copyAction->setShortcut(QKeySequence::Copy);
    connect(copyAction, &QAction::triggered, ui->tableWidget, &TableWidget::copy);
    menu->addAction(copyAction);

    menu->addSeparator();

    clearAction = new QAction(ICONS.ACT_CLEAR, tr("Clear"), ui->tableWidget);
    connect(clearAction, &QAction::triggered, this, &StatusField::reset);
    menu->addAction(clearAction);

    connect(ui->tableWidget, &QWidget::customContextMenuRequested, this, &StatusField::customContextMenuRequested);
}

void StatusField::readRecentMessages()
{
    for (const QString& msg : NotifyManager::getInstance()->getRecentInfos())
        info(msg);

    for (const QString& msg : NotifyManager::getInstance()->getRecentWarnings())
        warn(msg);

    for (const QString& msg : NotifyManager::getInstance()->getRecentErrors())
        error(msg);
}

void StatusField::customContextMenuRequested(const QPoint &pos)
{
    copyAction->setEnabled(ui->tableWidget->selectionModel()->selectedRows().size() > 0);

    menu->popup(ui->tableWidget->mapToGlobal(pos));
}

void StatusField::reset()
{
    ui->tableWidget->clear();
    ui->tableWidget->setRowCount(0);
}

void StatusField::fontChanged(const QVariant& variant)
{
    QFont newFont = variant.value<QFont>();
    QFont font;
    for (int row = 0; row < ui->tableWidget->rowCount(); row++)
    {
        font = ui->tableWidget->item(row, 1)->font();
        font = newFont.resolve(font);
        for (int col = 1; col <= 2; col++)
            ui->tableWidget->item(row, col)->setFont(font);
    }
}

void StatusField::changeFontSize(int factor)
{
    auto f = CFG_UI.Fonts.StatusField.get();
    f.setPointSize(f.pointSize() + factor);
    CFG_UI.Fonts.StatusField.set(f);
}

bool StatusField::isFadeOutBlocked()
{
    fadeOutBlockers.removeIf([](const auto& p) {
        return p.isNull();
    });

    return !fadeOutBlockers.isEmpty();
}

void StatusField::dimOldMessages()
{
    for (QTableWidgetItem* item : ui->tableWidget->findItems("", Qt::MatchContains))
    {
        if (item->data(DEPRECATED).toBool())
            continue;

        item->setData(DataRole::DEPRECATED, true);

        QIcon icon = item->icon();
        if (!icon.isNull())
        {
            qreal dpr = ui->tableWidget->devicePixelRatioF();

            QPixmap src = icon.pixmap(ui->tableWidget->iconSize() * dpr);
            src.setDevicePixelRatio(dpr);

            QPixmap dst(src.size());
            dst.setDevicePixelRatio(dpr);
            dst.fill(Qt::transparent);

            QPainter p(&dst);
            p.setOpacity(0.3);
            p.drawPixmap(0, 0, src);
            p.end();

            item->setIcon(QIcon(dst));
        }
    }

    refreshColors();
}

void StatusField::removeOldMessages()
{
    reset();
}

void StatusField::fontSizeChangeRequested(int delta)
{
    changeFontSize(delta >= 0 ? 1 : -1);
}

void StatusField::fadeOutOldMessages()
{
    if (isFadeOutBlocked())
        return;

    switch (static_cast<Cfg::StatusFieldFadingMode>(CFG_UI.General.StatusFieldMsgFadingMode.get()))
    {
        case Cfg::NO_FADE:
            break;
        case Cfg::GRAY_OUT:
            dimOldMessages();
            break;
        case Cfg::ERASE:
            removeOldMessages();
            break;
    }
}

StatusField::HtmlDelegate::HtmlDelegate(QWidget *viewport, LinkCallback linkCallback)
    : QStyledItemDelegate(viewport),
    viewport(viewport),
    linkCallback(std::move(linkCallback))
{
}

void StatusField::HtmlDelegate::paint(QPainter *painter, const QStyleOptionViewItem &option, const QModelIndex &index) const
{
    QStyleOptionViewItem opt(option);
    initStyleOption(&opt, index);

    painter->save();

    QStyle *style = opt.widget ? opt.widget->style() : QApplication::style();

    opt.text.clear();
    style->drawControl(QStyle::CE_ItemViewItem, &opt, painter, opt.widget);

    QString html = index.data(Qt::DisplayRole).toString();

    QVariant fg = index.data(Qt::ForegroundRole);
    QColor color = fg.canConvert<QBrush>() ?
        fg.value<QBrush>().color() :
        option.palette.color(QPalette::Text);

    QTextDocument doc;
    doc.setHtml(QString("<span style=\"color:%1;\">%2</span>").arg(color.name(), html));
    doc.setDefaultFont(opt.font);
    doc.setTextWidth(opt.rect.width());

    painter->translate(opt.rect.topLeft());
    QRect clip(0, 0, opt.rect.width(), opt.rect.height());
    doc.drawContents(painter, clip);

    painter->restore();
}

QSize StatusField::HtmlDelegate::sizeHint(const QStyleOptionViewItem &option, const QModelIndex &index) const
{
    QTextDocument doc;
    doc.setHtml(index.data(Qt::DisplayRole).toString());
    doc.setDefaultFont(option.font);
    doc.setTextWidth(option.rect.width());
    return QSize(doc.idealWidth(), doc.size().height());
}

bool StatusField::HtmlDelegate::editorEvent(QEvent *event, QAbstractItemModel *model, const QStyleOptionViewItem &option, const QModelIndex &index)
{
    Q_UNUSED(model);

    if (event->type() == QEvent::MouseMove)
    {
        auto *mouseEvent = static_cast<QMouseEvent*>(event);
        const QString href = anchorAt(mouseEvent, option, index);
        if (!href.isEmpty())
            viewport->setCursor(Qt::PointingHandCursor);
        else
            viewport->unsetCursor();

        return false;
    }
    if (event->type() == QEvent::MouseButtonRelease)
    {
        auto *mouseEvent = static_cast<QMouseEvent*>(event);
        if (mouseEvent->button() != Qt::LeftButton)
            return QStyledItemDelegate::editorEvent(event, model, option, index);

        QTextDocument doc;
        doc.setHtml(index.data(Qt::DisplayRole).toString());
        doc.setDefaultFont(option.font);

        QRect textRect = option.rect;
        doc.setTextWidth(textRect.width());

        QPointF pos = mouseEvent->position() - QPointF(textRect.topLeft());
        const QString href = doc.documentLayout()->anchorAt(pos);
        if (!href.isEmpty())
        {
            if (linkCallback)
                linkCallback(href);

            return true;
        }
    }

    return QStyledItemDelegate::editorEvent(event, model, option, index);
}

QString StatusField::HtmlDelegate::anchorAt(QMouseEvent *event, const QStyleOptionViewItem &option, const QModelIndex &index) const
{
    QTextDocument doc;
    doc.setHtml(index.data(Qt::DisplayRole).toString());
    doc.setDefaultFont(option.font);
    doc.setTextWidth(option.rect.width());

    const QPointF pos = event->position() - QPointF(option.rect.topLeft());
    return doc.documentLayout()->anchorAt(pos);
}
