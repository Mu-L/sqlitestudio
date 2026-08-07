#ifndef MACMDIWINDOWSWITCHER_H
#define MACMDIWINDOWSWITCHER_H

#include <QtGlobal>
#if QT_VERSION >= QT_VERSION_CHECK(6, 5, 0)
#include <QtSystemDetection>
#else
#include <qsystemdetection.h>
#endif

#ifdef Q_OS_MACOS

#include <QObject>
#include <QList>
#include <QPointer>

class QEvent;
class QKeyEvent;
class QMdiArea;
class QMdiSubWindow;
class QRubberBand;

class MacMdiWindowSwitcher : public QObject
{
    Q_OBJECT

    public:
        explicit MacMdiWindowSwitcher(QMdiArea* mdiArea, QObject* parent = nullptr);
        ~MacMdiWindowSwitcher() override;

    protected:
        bool eventFilter(QObject* watched, QEvent* event) override;

    private:
        bool isEventRelevant() const;
        bool isForwardSequence(const QKeyEvent* keyEvent) const;
        bool isBackwardSequence(const QKeyEvent* keyEvent) const;
        void beginSwitching(int direction);
        void advanceSelection(int direction);
        void finishSwitching();
        void cancelSwitching();
        void rebuildSnapshot();
        QMdiSubWindow* selectedWindow() const;
        void showSelectionIndicator();
        void hideSelectionIndicator();
        bool isValidWindow(QMdiSubWindow* window) const;
        int findNextValidIndex(int startIndex, int step) const;

        QPointer<QMdiArea> m_mdiArea;
        QList<QPointer<QMdiSubWindow>> m_snapshot;
        QPointer<QRubberBand> m_selectionIndicator;
        int m_selectedIndex = -1;
        bool m_switching = false;
        int m_direction = 0;
};

#endif // Q_OS_MACOS

#endif // MACMDIWINDOWSWITCHER_H
