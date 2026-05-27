#ifndef MANUALCOMMITWAL_MODEDIALOG_H
#define MANUALCOMMITWAL_MODEDIALOG_H

#include <QDialog>

namespace Ui {
    class ManualCommitWalModeDialog;
}

class ManualCommitWalModeDialog : public QDialog
{
        Q_OBJECT

    public:
        explicit ManualCommitWalModeDialog(const QString& dbName, QWidget *parent = nullptr);
        ~ManualCommitWalModeDialog();

    protected:
        void showEvent(QShowEvent* event) override;

    private:
        Ui::ManualCommitWalModeDialog *ui;
};

#endif // MANUALCOMMITWAL_MODEDIALOG_H
