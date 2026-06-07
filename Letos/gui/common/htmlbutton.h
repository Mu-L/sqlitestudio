#ifndef HTMLBUTTON_H
#define HTMLBUTTON_H

#include <QAbstractButton>
#include <QObject>

class QLabel;
class HtmlButton : public QAbstractButton
{
    Q_OBJECT

    public:
        explicit HtmlButton(QWidget* parent = nullptr);

        void setHtml(const QString& html);
        void setSideHtml(const QString& html);
        void setButtonIcon(const QIcon& icon, const QSize& size = QSize(16, 16));
        QSize sizeHint() const override;
        QSize minimumSizeHint() const override;

        bool isFlat() const;
        void setFlat(bool newFlat);

    protected:
        void paintEvent(QPaintEvent*) override;
        void enterEvent(QEnterEvent* event) override;
        void leaveEvent(QEvent* event) override;

    private:
        QLabel* iconLabel = nullptr;
        QLabel* textLabel = nullptr;
        QLabel* sideLabel = nullptr;
        bool flat = false;
};
#endif // HTMLBUTTON_H
