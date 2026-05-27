#include "manualcommitpendingtxdialog.h"
#include "ui_manualcommitpendingtxdialog.h"
#include "iconmanager.h"

ManualCommitPendingTxDialog::ManualCommitPendingTxDialog(const QString& dbName, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::ManualCommitPendingTxDialog)
{
    ui->setupUi(this);
    ui->label->setText(ui->label->text().arg(dbName));
    ui->commitButton->setIcon(ICONS.COMMIT);
    ui->rollbackButton->setIcon(ICONS.ROLLBACK);
    ui->abortButton->setIcon(ICONS.CANCEL);
    connect(ui->commitButton, &QCommandLinkButton::clicked, this, [this]() {done(COMMIT);});
    connect(ui->rollbackButton, &QCommandLinkButton::clicked, this, [this]() {done(ROLLBACK);});
    connect(ui->abortButton, SIGNAL(clicked(bool)), this, SLOT(reject()));
}

ManualCommitPendingTxDialog::~ManualCommitPendingTxDialog()
{
    delete ui;
}
