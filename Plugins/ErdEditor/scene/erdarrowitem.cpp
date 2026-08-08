#include "erdarrowitem.h"
#include "erdconnection.h"
#include "erdcurvyarrowitem.h"
#include "erdlinearrowitem.h"
#include "erdscene.h"
#include "erdsquarearrowitem.h"
#include "erdeditorplugin.h"
#include <QGraphicsDropShadowEffect>
#include <QPen>
#include <QtMath>
#include <QPainter>
#include <QDebug>

ErdArrowItem::ErdArrowItem() :
    QGraphicsPathItem()
{
    setZValue(1);

    QGraphicsDropShadowEffect* effect = new QGraphicsDropShadowEffect();
    effect->setBlurRadius(20);
    effect->setOffset(4, 4);
    effect->setColor(QColor(0, 0, 0, 128));
    setGraphicsEffect(effect);
}

void ErdArrowItem::refreshArrowHead(qreal yDistance, qreal xDistance)
{
    double angle = std::atan2(yDistance, xDistance);
    QPointF arrowP1 = endPoint + QPointF(sin(angle + M_PI / 3) * arrowSize,
                                           cos(angle + M_PI / 3) * arrowSize);
    QPointF arrowP2 = endPoint + QPointF(sin(angle + M_PI - M_PI / 3) * arrowSize,
                                           cos(angle + M_PI - M_PI / 3) * arrowSize);

    arrowHead.clear();
    arrowHead << endPoint << arrowP1 << arrowP2;
}

ErdArrowItem* ErdArrowItem::create(Type type)
{
    ErdArrowItem* item = nullptr;
    switch (type)
    {
        case STRAIGHT:
            item = new ErdLineArrowItem();
            break;
        case CURVY:
            item = new ErdCurvyArrowItem();
            break;
        case SQUARE:
            item = new ErdSquareArrowItem();
            break;
        default:
            qCritical() << "Unsupported ERD arrow item type:" << static_cast<int>(type);
            return nullptr;
    }
    item->arrowItemType = type;
    return item;
}

QPainterPath ErdArrowItem::shape() const
{
    QPainterPath path = QGraphicsPathItem::path();

    QPainterPathStroker stroker;
    stroker.setWidth(15.0);
    stroker.setCapStyle(Qt::RoundCap);
    stroker.setJoinStyle(Qt::RoundJoin);

    QPainterPath stroked = stroker.createStroke(path);
    stroked.addPath(path);
    stroked.addPolygon(arrowHead);

    return stroked;
}

QRectF ErdArrowItem::boundingRect() const
{
    qreal extra = (pen().width() + arrowSize) / 2.0;
    return QGraphicsPathItem::boundingRect().adjusted(-extra, -extra, extra, extra);
}

bool ErdArrowItem::isClickable()
{
    return flags().testFlag(QGraphicsItem::ItemIsSelectable);
}

int ErdArrowItem::type() const
{
    return arrowItemType;
}

void ErdArrowItem::setArrowIndexInStartEntity(int idx)
{
    arrowIndexInStartEntity = idx;
}

void ErdArrowItem::setArrowIndexInEndEntity(int idx)
{
    arrowIndexInEndEntity = idx;
}

void ErdArrowItem::paintGlow(QPainter* painter)
{
    if (!CFG_ERD.Erd.GlowingRelations.get())
        return;

    if (isSelected())
        return;

    ErdScene* erdScene = qobject_cast<ErdScene*>(scene());
    if (!erdScene)
    {
        qWarning() << "No ErdScene for arrow" << this << ". Skipping arrow glowing routine.";
        return;
    }
    ErdConnection* conn = erdScene->getConnectionForArrow(this);
    if (!conn)
    {
        qWarning() << "No ErdConnection for arrow" << this << ". Skipping arrow glowing routine.";
        return;
    }

    QList<ErdEntity*> selectedEntities = erdScene->getSelectedEntities();
    if (!selectedEntities.contains(conn->getStartEntity()) && !selectedEntities.contains(conn->getEndEntity()))
        return;

    struct GlowLayer
    {
        qreal width;
        int alpha;
    };

    static constexpr GlowLayer glowLayers[] = {
        { 11.0, 20 },
        {  7.0, 35 },
        {  4.0, 70 }
    };

    const QColor glowBase = QColor(0, 192, 0);

    painter->setBrush(Qt::NoBrush);

    QColor color = glowBase;
    for (const auto& layer : glowLayers)
    {
        color.setAlpha(layer.alpha);
        QPen pen(color, layer.width, Qt::SolidLine, Qt::RoundCap, Qt::RoundJoin);
        painter->setPen(pen);
        painter->drawPath(path());
    }
}

