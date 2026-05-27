#ifndef MANUALCOMMITPENDINGTXDIALOG_H
#define MANUALCOMMITPENDINGTXDIALOG_H

#include <QDialog>

namespace Ui {
    class ManualCommitPendingTxDialog;
}

class ManualCommitPendingTxDialog : public QDialog
{
        Q_OBJECT

    public:
        enum Action
        {
            COMMIT = 1000,
            ROLLBACK = 1001
        };

        explicit ManualCommitPendingTxDialog(const QString& dbName, QWidget *parent = nullptr);
        ~ManualCommitPendingTxDialog();

    private:
        Ui::ManualCommitPendingTxDialog *ui;
};

#endif // MANUALCOMMITPENDINGTXDIALOG_H
