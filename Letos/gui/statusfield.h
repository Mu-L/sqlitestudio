#ifndef STATUSFIELD_H
#define STATUSFIELD_H

#include "gui_global.h"
#include <QVariant>
#include <QDockWidget>
#include <QPointer>
#include <QTimer>
#include <QStyledItemDelegate>
#include <QTextDocument>

class QMenu;
class QAbstractAnimation;
class QTableWidgetItem;

namespace Ui {
    class StatusField;
}

class GUI_API_EXPORT StatusField : public QDockWidget
{
        Q_OBJECT

    public:
        explicit StatusField(QWidget *parent = 0);
        ~StatusField();

        bool hasMessages() const;
        void suspend();
        void resume();

        /**
         * @brief Blocks the fade out of messages while the blocker object exists and is not released with releaseFadeOutFor.
         * @param blocker Object to block for.
         *
         * As long as the blocker exists and is on the blocker list, the fadeOutOldMessages() won't actually fade messages.
         * This is necessary for long-running queries, that should be treated as single action and for initial messages not to fade
         * after significant period of time.
         *
         * Without that, when new message arrives to the StatusField and it's been longer than 2 seconds since the last message,
         * the fadeOutOldMessages() will be called and it will start fading all messages, including the new one.
         */
        void blockFadeOutFor(QObject* blocker);
        void releaseFadeOutFor(QObject* blocker);

    protected:
        void changeEvent(QEvent *e);

    private:
        enum EntryRole
        {
            INFO,
            WARN,
            ERROR
        };

        enum DataRole
        {
            ENTRY_ROLE = Qt::UserRole + 1,
            HAS_WIDGET_LABEL = Qt::UserRole + 2,
            DEPRECATED = Qt::UserRole + 3
        };

        class HtmlDelegate : public QStyledItemDelegate
        {
            public:
                using LinkCallback = std::function<void(const QString&)>;

                HtmlDelegate(QWidget *viewport, LinkCallback linkCallback);

                void paint(QPainter *painter, const QStyleOptionViewItem &option, const QModelIndex &index) const override;
                QSize sizeHint(const QStyleOptionViewItem &option, const QModelIndex &index) const override;
                bool editorEvent(QEvent *event, QAbstractItemModel *model, const QStyleOptionViewItem &option,
                                 const QModelIndex &index) override;

            private:
                QString anchorAt(QMouseEvent *event, const QStyleOptionViewItem &option, const QModelIndex &index) const;
                void prepareDoc(QTextDocument& doc, const QModelIndex& index, const QStyleOptionViewItem& opt) const;

                QWidget *viewport;
                LinkCallback linkCallback;
        };

        void addEntry(const QIcon& icon, const QString& text, const QColor& color, EntryRole role);
        void flashItems(const QList<QTableWidgetItem*>& items, const QColor& color);
        void setupMenu();
        void readRecentMessages();
        void changeFontSize(int factor);
        bool isFadeOutBlocked();
        void dimOldMessages();
        void removeOldMessages();

        Ui::StatusField *ui = nullptr;
        QMenu* menu = nullptr;
        QAction* copyAction = nullptr;
        QAction* clearAction = nullptr;
        bool suspended = false;
        QList<QPointer<QObject>> fadeOutBlockers;
        QTimer fadeOutTimer;

        static const int fadeOutTimerInterval = 2000;
        static const int timeStampColumnWidth = 70;
        static const int itemCountLimit = 30;
        static const int itemRole = Qt::UserRole;
        static constexpr const char* timeStampFormat = "hh:mm:ss";

    private slots:
        void customContextMenuRequested(const QPoint& pos);
        void info(const QString& text);
        void warn(const QString& text);
        void error(const QString& text);
        void reset();
        void fontChanged(const QVariant& variant);
        void fontSizeChangeRequested(int delta);

    public slots:
        void fadeOutOldMessages();
        void refreshColors();

    signals:
        void linkActivated(const QString& link);
};

#define STATUSFIELD MainWindow::getInstance()->getStatusField()

#endif // STATUSFIELD_H
