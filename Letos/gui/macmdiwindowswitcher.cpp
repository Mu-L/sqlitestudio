#include "macmdiwindowswitcher.h"

#ifdef Q_OS_MACOS

#include <QApplication>
#include <QEvent>
#include <QKeyEvent>
#include <QMdiArea>
#include <QMdiSubWindow>
#include <QRubberBand>
#include <QWidget>

MacMdiWindowSwitcher::MacMdiWindowSwitcher(QMdiArea* mdiArea, QObject* parent) :
    QObject(parent),
    m_mdiArea(mdiArea)
{
    if (m_mdiArea)
    {
        connect(m_mdiArea, &QObject::destroyed, this, [this]()
        {
            cancelSwitching();
            m_mdiArea = nullptr;
        });
    }

    qApp->installEventFilter(this);
}

MacMdiWindowSwitcher::~MacMdiWindowSwitcher()
{
    if (qApp)
        qApp->removeEventFilter(this);
}

bool MacMdiWindowSwitcher::eventFilter(QObject* watched, QEvent* event)
{
    if (!event)
        return QObject::eventFilter(watched, event);

    if (!m_mdiArea)
    {
        cancelSwitching();
        return QObject::eventFilter(watched, event);
    }

    if (event->type() == QEvent::ApplicationDeactivate)
    {
        cancelSwitching();
        return QObject::eventFilter(watched, event);
    }

    if (event->type() == QEvent::WindowDeactivate)
    {
        QWidget* areaWindow = m_mdiArea->window();
        QWidget* watchedWidget = qobject_cast<QWidget*>(watched);
        if (areaWindow && watchedWidget == areaWindow)
            cancelSwitching();

        return QObject::eventFilter(watched, event);
    }

    if (event->type() != QEvent::KeyPress && event->type() != QEvent::KeyRelease && event->type() != QEvent::ShortcutOverride)
        return QObject::eventFilter(watched, event);

    QKeyEvent* keyEvent = static_cast<QKeyEvent*>(event);

    if (m_switching && event->type() == QEvent::KeyRelease && keyEvent->key() == Qt::Key_Meta)
    {
        finishSwitching();
        return true;
    }

    if (m_switching && event->type() == QEvent::KeyPress && keyEvent->key() == Qt::Key_Escape)
    {
        cancelSwitching();
        return true;
    }

    if (event->type() == QEvent::KeyPress || event->type() == QEvent::ShortcutOverride)
    {
        int direction = 0;
        if (isForwardSequence(keyEvent))
            direction = 1;
        else if (isBackwardSequence(keyEvent))
            direction = -1;

        if (direction != 0)
        {
            if (!isEventRelevant())
                return QObject::eventFilter(watched, event);

            if (!m_switching)
                beginSwitching(direction);
            else
                advanceSelection(direction);

            return true;
        }
    }

    if (m_switching && !isEventRelevant())
        cancelSwitching();

    return QObject::eventFilter(watched, event);
}

bool MacMdiWindowSwitcher::isEventRelevant() const
{
    if (!m_mdiArea)
        return false;

    QWidget* areaWindow = m_mdiArea->window();
    if (!areaWindow || !areaWindow->isActiveWindow())
        return false;

    QWidget* focus = QApplication::focusWidget();
    if (!focus)
        return false;

    if (focus == m_mdiArea)
        return true;

    if (!m_mdiArea->isAncestorOf(focus))
        return false;

    QMdiSubWindow* activeSubWindow = m_mdiArea->activeSubWindow();
    if (!activeSubWindow)
        return true;

    QMdiSubWindow* focusSubWindow = nullptr;
    for (QWidget* parent = focus; parent; parent = parent->parentWidget())
    {
        focusSubWindow = qobject_cast<QMdiSubWindow*>(parent);
        if (focusSubWindow || parent == m_mdiArea)
            break;
    }

    if (!focusSubWindow)
        return true;

    return focusSubWindow == activeSubWindow && focusSubWindow->mdiArea() == m_mdiArea;
}

bool MacMdiWindowSwitcher::isForwardSequence(const QKeyEvent* keyEvent) const
{
    if (!keyEvent)
        return false;

    Qt::KeyboardModifiers modifiers = keyEvent->modifiers();
    return keyEvent->key() == Qt::Key_Tab
            && modifiers.testFlag(Qt::MetaModifier)
            && !modifiers.testFlag(Qt::ShiftModifier);
}

bool MacMdiWindowSwitcher::isBackwardSequence(const QKeyEvent* keyEvent) const
{
    if (!keyEvent)
        return false;

    Qt::KeyboardModifiers modifiers = keyEvent->modifiers();
    if (!modifiers.testFlag(Qt::MetaModifier))
        return false;

    return keyEvent->key() == Qt::Key_Backtab
            || (keyEvent->key() == Qt::Key_Tab && modifiers.testFlag(Qt::ShiftModifier));
}

void MacMdiWindowSwitcher::beginSwitching(int direction)
{
    cancelSwitching();
    rebuildSnapshot();

    if (m_snapshot.size() < 2)
        return;

    int activeIndex = -1;
    QMdiSubWindow* activeSubWindow = m_mdiArea->activeSubWindow();
    if (activeSubWindow)
    {
        for (int i = 0; i < m_snapshot.size(); ++i)
        {
            if (m_snapshot.at(i) == activeSubWindow)
            {
                activeIndex = i;
                break;
            }
        }
    }

    if (activeIndex < 0)
        activeIndex = m_snapshot.size() - 1;

    m_switching = true;
    m_direction = (direction >= 0) ? 1 : -1;
    m_selectedIndex = activeIndex;
    advanceSelection(m_direction);
}

void MacMdiWindowSwitcher::advanceSelection(int direction)
{
    if (!m_switching)
        return;

    if (direction != 1 && direction != -1)
        direction = (m_direction == -1) ? -1 : 1;

    if (m_snapshot.isEmpty())
    {
        cancelSwitching();
        return;
    }

    m_direction = direction;
    int step = (m_direction > 0) ? -1 : 1;
    int nextIndex = findNextValidIndex(m_selectedIndex, step);
    if (nextIndex < 0)
    {
        cancelSwitching();
        return;
    }

    m_selectedIndex = nextIndex;
    showSelectionIndicator();
}

void MacMdiWindowSwitcher::finishSwitching()
{
    if (!m_switching)
        return;

    QMdiSubWindow* window = selectedWindow();
    if (!window)
    {
        int step = (m_direction > 0) ? -1 : 1;
        int nextIndex = findNextValidIndex(m_selectedIndex, step);
        if (nextIndex >= 0)
        {
            m_selectedIndex = nextIndex;
            window = selectedWindow();
        }
    }

    QPointer<QMdiSubWindow> targetWindow = window;
    cancelSwitching();

    if (m_mdiArea && targetWindow && isValidWindow(targetWindow))
        m_mdiArea->setActiveSubWindow(targetWindow);
}

void MacMdiWindowSwitcher::cancelSwitching()
{
    hideSelectionIndicator();
    m_snapshot.clear();
    m_selectedIndex = -1;
    m_switching = false;
    m_direction = 0;
}

void MacMdiWindowSwitcher::rebuildSnapshot()
{
    m_snapshot.clear();

    if (!m_mdiArea)
        return;

    QList<QMdiSubWindow*> windows = m_mdiArea->subWindowList(QMdiArea::ActivationHistoryOrder);
    for (QMdiSubWindow* window : windows)
    {
        if (isValidWindow(window))
            m_snapshot.append(window);
    }
}

QMdiSubWindow* MacMdiWindowSwitcher::selectedWindow() const
{
    if (!m_switching)
        return nullptr;

    if (m_selectedIndex < 0 || m_selectedIndex >= m_snapshot.size())
        return nullptr;

    QMdiSubWindow* window = m_snapshot.at(m_selectedIndex);
    if (!isValidWindow(window))
        return nullptr;

    return window;
}

void MacMdiWindowSwitcher::showSelectionIndicator()
{
    if (!m_mdiArea)
        return;

    QMdiSubWindow* window = selectedWindow();
    if (!window)
    {
        hideSelectionIndicator();
        return;
    }

    if (!m_selectionIndicator)
    {
        m_selectionIndicator = new QRubberBand(QRubberBand::Rectangle, m_mdiArea->viewport());
        m_selectionIndicator->setObjectName("mac_mdi_window_switcher_indicator");
    }

    if (m_selectionIndicator->parentWidget() != m_mdiArea->viewport())
        m_selectionIndicator->setParent(m_mdiArea->viewport());

    m_selectionIndicator->setGeometry(window->geometry());
    m_selectionIndicator->raise();
    m_selectionIndicator->show();
}

void MacMdiWindowSwitcher::hideSelectionIndicator()
{
    if (m_selectionIndicator)
        m_selectionIndicator->hide();
}

bool MacMdiWindowSwitcher::isValidWindow(QMdiSubWindow* window) const
{
    if (!window || !m_mdiArea)
        return false;

    if (window->mdiArea() != m_mdiArea)
        return false;

    if (!window->isVisible() || window->isHidden())
        return false;

    if (window->parentWidget() != m_mdiArea->viewport())
        return false;

    QList<QMdiSubWindow*> windows = m_mdiArea->subWindowList();
    return windows.contains(window);
}

int MacMdiWindowSwitcher::findNextValidIndex(int startIndex, int step) const
{
    int count = m_snapshot.size();
    if (count == 0)
        return -1;

    if (step == 0)
        step = 1;

    int index = startIndex;
    if (index < 0 || index >= count)
        index = (step > 0) ? count - 1 : 0;

    for (int i = 0; i < count; ++i)
    {
        index = (index + step + count) % count;
        QMdiSubWindow* window = m_snapshot.at(index);
        if (isValidWindow(window))
            return index;
    }

    return -1;
}

#endif // Q_OS_MACOS
