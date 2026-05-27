#include "manualcommitwalmodedialog.h"
#include "ui_manualcommitwalmodedialog.h"
#include "iconmanager.h"

ManualCommitWalModeDialog::ManualCommitWalModeDialog(const QString& dbName, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::ManualCommitWalModeDialog)
{
    ui->setupUi(this);
    ui->label->setText(ui->label->text().arg(dbName));
    ui->enableButton->setIcon(ICONS.OK);
    ui->cancelButton->setIcon(ICONS.CANCEL);
    connect(ui->enableButton, SIGNAL(clicked(bool)), this, SLOT(accept()));
    connect(ui->cancelButton, SIGNAL(clicked(bool)), this, SLOT(reject()));
}

ManualCommitWalModeDialog::~ManualCommitWalModeDialog()
{
    delete ui;
}

void ManualCommitWalModeDialog::showEvent(QShowEvent* event)
{
    QDialog::showEvent(event);
    adjustSize();
}
