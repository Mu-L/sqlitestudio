#ifndef TIPOFTHEDAYDIALOG_H
#define TIPOFTHEDAYDIALOG_H

#include "tipofthedayplugin.h"
#include <QDialog>
#include <QLabel>

namespace Ui {
    class TipOfTheDayDialog;
}

class TipOfTheDayDialog : public QDialog
{
        Q_OBJECT

    public:
        explicit TipOfTheDayDialog(QWidget *parent = nullptr);
        ~TipOfTheDayDialog();

        int getCurrentIdx() const;
        void setCurrentIdx(int newCurrentIdx);

        void setTips(const QList<TipOfTheDayPlugin::Tip>& newTips);

    private:
        bool hasPrev() const;
        bool hasNext() const;
        void loadCurrentTip();

        Ui::TipOfTheDayDialog *ui;

        QList<TipOfTheDayPlugin::Tip> tips;
        int currentIdx = 0;
        QPushButton* prevBtn = nullptr;
        QPushButton* nextBtn = nullptr;
        QTimer* readMarkerTimer = nullptr;

    private slots:
        void prevTip();
        void nextTip();
        void updateState();
        void markCurrentAsRead();

    signals:
        void markAsRead(const QString& summary);
};

#endif // TIPOFTHEDAYDIALOG_H
