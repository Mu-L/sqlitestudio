#include "tipofthedaydialog.h"
#include "ui_tipofthedaydialog.h"
#include "dialogs/configdialog.h"
#include <QPushButton>
#include <QStyle>
#include <QTimer>

TipOfTheDayDialog::TipOfTheDayDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::TipOfTheDayDialog)
{
    ui->setupUi(this);

    ui->contentEdit->viewport()->setStyleSheet("background: transparent;");
    ui->contentEdit->setFrameStyle(QFrame::NoFrame);
    ui->contentEdit->setFocusPolicy(Qt::NoFocus);

    QFont f = qApp->font();
    f.setPointSizeF(f.pointSizeF() * 1.2);
    ui->contentEdit->document()->setDefaultFont(f);

    counterLabel = new QLabel();

    configBtn = ui->buttonBox->addButton(tr("Configure", "tip of the day dialog"), QDialogButtonBox::ActionRole);
    prevBtn = ui->buttonBox->addButton(tr("« Previous", "tip of the day dialog"), QDialogButtonBox::ActionRole);
    nextBtn = ui->buttonBox->addButton(tr("Next »", "tip of the day dialog"), QDialogButtonBox::ActionRole);
    QPushButton* closeBtn = ui->buttonBox->button(QDialogButtonBox::Close);

    auto* layout = qobject_cast<QBoxLayout*>(ui->buttonBox->layout());
    int idx = layout->indexOf(closeBtn);
    layout->insertSpacing(idx, 10);
    layout->insertWidget(idx, counterLabel);
    idx = layout->indexOf(prevBtn);
    layout->insertSpacing(idx, 30);

    connect(prevBtn, SIGNAL(clicked(bool)), this, SLOT(prevTip()));
    connect(nextBtn, SIGNAL(clicked(bool)), this, SLOT(nextTip()));
    connect(configBtn, SIGNAL(clicked(bool)), this, SLOT(configure()));

    readMarkerTimer = new QTimer(this);
    readMarkerTimer->setSingleShot(true);
    readMarkerTimer->setInterval(5000);
    connect(readMarkerTimer, SIGNAL(timeout()), this, SLOT(markCurrentAsRead()));

    updateState();
}

TipOfTheDayDialog::~TipOfTheDayDialog()
{
    delete ui;
}

int TipOfTheDayDialog::getCurrentIdx() const
{
    return currentIdx;
}

void TipOfTheDayDialog::setCurrentIdx(int newCurrentIdx)
{
    currentIdx = newCurrentIdx;
    loadCurrentTip();
    updateState();
}

bool TipOfTheDayDialog::hasPrev() const
{
    return currentIdx > 0 && !tips.isEmpty();
}

bool TipOfTheDayDialog::hasNext() const
{
    return currentIdx < tips.size() - 1 && !tips.isEmpty();
}

void TipOfTheDayDialog::loadCurrentTip()
{
    if (currentIdx >= 0 && currentIdx < tips.size())
    {
        ui->contentEdit->setMarkdown(tips[currentIdx].content);
        counterLabel->setText(QString("[%1/%2]").arg(currentIdx+1).arg(tips.size()));
        readMarkerTimer->start();
    }
}

void TipOfTheDayDialog::setTips(const QList<TipOfTheDayPlugin::Tip>& newTips)
{
    tips = newTips;
}

void TipOfTheDayDialog::prevTip()
{
    if (hasPrev())
    {
        currentIdx--;
        loadCurrentTip();
    }

    updateState();
}

void TipOfTheDayDialog::nextTip()
{
    if (hasNext())
    {
        currentIdx++;
        loadCurrentTip();
    }

    updateState();
}

void TipOfTheDayDialog::updateState()
{
    prevBtn->setEnabled(hasPrev());
    nextBtn->setEnabled(hasNext());
}

void TipOfTheDayDialog::markCurrentAsRead()
{
    if (currentIdx >= 0 && currentIdx < tips.size())
        emit markAsRead(tips[currentIdx].summary);
}

void TipOfTheDayDialog::configure()
{
    ConfigDialog* dialog = ConfigDialog::openModal();
    dialog->openAtSettingCategory("TipOfTheDayPlugin");
}
