#include "commandpalette.h"
#include "commandpalette/cpdbobjectsprovider.h"
#include "commandpalette/cpglobalactionsprovider.h"
#include "commandpalette/cpmdiwindowsprovider.h"
#include "common/htmlbutton.h"
#include "common/utils.h"
#include "cpconfigdialogprovider.h"
#include "common/global.h"
#include <QKeyEvent>
#include <QScrollArea>
#include <QTimer>

CommandPalette::CommandPalette(QWidget* parent) :
    QWidget(parent)
{
    setObjectName("commandPalette");

    searchTimer = new QTimer(this);
    searchTimer->setSingleShot(true);
    searchTimer->setInterval(500);
    connect(searchTimer, &QTimer::timeout, this, &CommandPalette::runSearch);

    buildUi();
    initProviders();
}

CommandPalette::~CommandPalette()
{
    qDeleteAll(providers);
}

void CommandPalette::initProviders()
{
    providers << new CpConfigDialogProvider();
    providers << new CpDbObjectsProvider();
    providers << new CpMdiWindowsProvider();
    providers << new CpGlobalActionsProvider();
}

void CommandPalette::buildUi()
{
    setFixedWidth(WIDTH);
    setMinimumHeight(MIN_HEIGHT);
    setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Maximum);
    setAttribute(Qt::WA_StyledBackground, true);
    setFocusPolicy(Qt::StrongFocus);

    mainLayout = new QVBoxLayout(this);
    mainLayout->setContentsMargins(8, 8, 8, 8);
    mainLayout->setSpacing(6);

    searchEdit = new QLineEdit(this);
    searchEdit->setPlaceholderText(tr("Search anything..."));
    connect(searchEdit, &QLineEdit::textEdited, searchTimer, qOverload<>(&QTimer::start));
    mainLayout->addWidget(searchEdit);

    separator = new QFrame(this);
    separator->setFrameShape(QFrame::HLine);
    separator->setFrameShadow(QFrame::Sunken);
    mainLayout->addWidget(separator);

    scrollArea = new QScrollArea(this);
    scrollArea->setWidgetResizable(true);
    scrollArea->setFrameShape(QFrame::NoFrame);
    scrollArea->setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);

    entriesContainer = new QWidget(scrollArea);
    entriesContainer->setMaximumWidth(WIDTH - 16);
    entriesLayout = new QVBoxLayout(entriesContainer);
    entriesLayout->setContentsMargins(0, 0, 0, 0);
    entriesLayout->setSpacing(2);
    entriesLayout->setAlignment(Qt::AlignTop);

    scrollArea->setWidget(entriesContainer);
    mainLayout->addWidget(scrollArea);
}

int CommandPalette::preferredHeight() const
{
    QMargins mainMargins = layout()->contentsMargins();
    int searchHeight = searchEdit ? searchEdit->height() : 0;
    int separatorHeight = separator ? separator->height() : 0;
    int entriesHeight = 0;
    for (HtmlButton* button : entryButtons)
        entriesHeight += button->height();

    int entriesSpacing = entryButtons.size() > 1 ? entriesLayout->spacing() * (entryButtons.size() - 1) : 0;
    int mainSpacing = layout()->spacing();
    int height =
        mainMargins.top()
        + mainMargins.bottom()
        + searchHeight
        + mainSpacing
        + separatorHeight
        + mainSpacing
        + entriesHeight
        + entriesSpacing;

    return qMax(MIN_HEIGHT, height);
}

QSize CommandPalette::sizeHint() const
{
    return {WIDTH, preferredHeight()};
}

void CommandPalette::registerProvider(Provider* provider)
{
    providers << provider;
}

void CommandPalette::deregisterProvider(Provider* provider)
{
    providers.removeOne(provider);
}

void CommandPalette::rebuildEntryButtons()
{
    static_qstring(entryWithDetails, "<b>%1</b><br>%2");
    static_qstring(entryNoDetails, "<b>%1</b>");
    for (int i = 0; i < matchedEntries.size(); ++i)
    {
        Entry* entry = matchedEntries.at(i);
        QString html = entry->getDetails().isEmpty() ?
                entryNoDetails.arg(entry->getTitle()) :
                entryWithDetails.arg(entry->getTitle(), entry->getDetails());

        auto* button = new HtmlButton(entriesContainer);
        button->setFlat(true);
        button->setHtml(html);
        button->setSideHtml(entry->getSideLabel());
        button->setCheckable(true);
        button->setButtonIcon(entry->getIcon(), QSize(24, 24));
        button->setFocusPolicy(Qt::NoFocus);

        connect(button, &HtmlButton::clicked, this, [this, i]()
        {
            selectEntry(i);
            executeSelectedEntry();
        });

        entriesLayout->addWidget(button);
        entryButtons.append(button);
    }

    if (!entryButtons.isEmpty())
        selectEntry(0);
}

void CommandPalette::selectEntry(int index)
{
    if (entryButtons.isEmpty())
    {
        selectedEntryIndex = -1;
        return;
    }

    index = qBound(0, index, entryButtons.size() - 1);

    if (selectedEntryIndex >= 0 && selectedEntryIndex < entryButtons.size())
        entryButtons[selectedEntryIndex]->setChecked(false);

    selectedEntryIndex = index;

    auto* selectedButton = entryButtons[selectedEntryIndex];
    selectedButton->setChecked(true);
    scrollArea->ensureWidgetVisible(selectedButton);
}

void CommandPalette::executeSelectedEntry()
{
    if (selectedEntryIndex < 0 || selectedEntryIndex >= matchedEntries.size())
        return;

    QString value = searchEdit->text();
    Entry* entry = matchedEntries.at(selectedEntryIndex);
    hide();
    entry->exec(value);
    cleanUp();
}

void CommandPalette::focusSearch()
{
    searchEdit->setFocus(Qt::OtherFocusReason);
}

void CommandPalette::cleanUp()
{
    for (auto* e : matchedEntries)
        delete e;

    matchedEntries.clear();

    for (HtmlButton* button : entryButtons)
        button->deleteLater();

    entryButtons.clear();
    selectedEntryIndex = -1;

    while (entriesLayout->count() > 0)
    {
        QLayoutItem* item = entriesLayout->takeAt(0);

        if (QWidget* widget = item->widget())
            widget->deleteLater();

        delete item;
    }
}

void CommandPalette::runSearch()
{
    cleanUp();

    QStringList parts = searchEdit->text().split(" ", Qt::SkipEmptyParts);
    QString value = parts.isEmpty() ? "" : parts.takeFirst();
    if (!value.trimmed().isEmpty())
    {
        for (Provider*& p : providers)
            matchedEntries += p->getEntries(value);
    }

    for (const QString& part : parts)
    {
        for (Entry*& e : matchedEntries)
        {
            if (e->getTitle().contains(part, Qt::CaseInsensitive) || e->getDetails().contains(part, Qt::CaseInsensitive))
                e->incrScore(100);
        }
    }

    sSort(matchedEntries, [](Entry* e1, Entry* e2)
    {
        return e1->getScore() > e2->getScore();
    });

    rebuildEntryButtons();
    QTimer::singleShot(0, [this]() {updateGeometry();});
}

void CommandPalette::hideEvent(QHideEvent* event)
{
    Q_UNUSED(event);
    emit hidden();
}

void CommandPalette::showEvent(QShowEvent* event)
{
    searchEdit->clear();
    QWidget::showEvent(event);
    runSearch();
    focusSearch();
}

bool CommandPalette::eventFilter(QObject* watched, QEvent* event)
{
    if (event->type() == QEvent::ShortcutOverride)
    {
        auto* keyEvent = static_cast<QKeyEvent*>(event);

        switch (keyEvent->key())
        {
            case Qt::Key_Escape:
            case Qt::Key_Up:
            case Qt::Key_Down:
            case Qt::Key_PageUp:
            case Qt::Key_PageDown:
            case Qt::Key_Return:
            case Qt::Key_Enter:
                event->accept();
                return true;

            default:
                break;
        }
    }

    if (event->type() == QEvent::MouseButtonPress)
    {
        hide();
        cleanUp();
        event->accept();
        return true;
    }
    if (event->type() == QEvent::KeyPress)
    {
        auto* keyEvent = static_cast<QKeyEvent*>(event);
        switch (keyEvent->key())
        {
            case Qt::Key_Escape:
                hide();
                cleanUp();
                event->accept();
                return true;

            case Qt::Key_Up:
                selectEntry(selectedEntryIndex - 1);
                focusSearch();
                event->accept();
                return true;

            case Qt::Key_Down:
                selectEntry(selectedEntryIndex + 1);
                focusSearch();
                event->accept();
                return true;

            case Qt::Key_PageUp:
                selectEntry(selectedEntryIndex - 10);
                focusSearch();
                event->accept();
                return true;

            case Qt::Key_PageDown:
                selectEntry(selectedEntryIndex + 10);
                focusSearch();
                event->accept();
                return true;

            case Qt::Key_Return:
            case Qt::Key_Enter:
                executeSelectedEntry();
                event->accept();
                return true;
            default:
                break;
        }
    }

    return QObject::eventFilter(watched, event);
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void (SimpleEntry*)>& callback) :
    icon(icon), title(title), details(details), score(score), callback(callback)
{
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void ()>& callback) :
    icon(icon), title(title), details(details), score(score), noArgCallback(callback)
{
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void (const QString&)>& callback) :
    icon(icon), title(title), details(details), score(score), searchValueCallback(callback)
{
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void (SimpleEntry*)>& callback) :
    SimpleEntry(icon, title, details, score, callback)
{
    this->sideLabel = sideLabel;
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void ()>& callback) :
    SimpleEntry(icon, title, details, score, callback)
{
    this->sideLabel = sideLabel;
}

CommandPalette::SimpleEntry::SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void (const QString&)>& callback) :
    SimpleEntry(icon, title, details, score, callback)
{
    this->sideLabel = sideLabel;
}

QIcon CommandPalette::SimpleEntry::getIcon() const
{
    return icon;
}

QString CommandPalette::SimpleEntry::getTitle() const
{
    return title;
}

QString CommandPalette::SimpleEntry::getDetails() const
{
    return details;
}

QString CommandPalette::SimpleEntry::getSideLabel() const
{
    return sideLabel;
}

void CommandPalette::SimpleEntry::exec(const QString& searchValue)
{
    if (callback)
        callback(this);
    else if (searchValueCallback)
        searchValueCallback(searchValue);
    else if (noArgCallback)
        noArgCallback();
}

int CommandPalette::SimpleEntry::getScore() const
{
    return score;
}

void CommandPalette::SimpleEntry::incrScore(int value)
{
    score += value;
}
