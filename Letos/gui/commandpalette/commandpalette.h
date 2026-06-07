#ifndef COMMANDPALETTE_H
#define COMMANDPALETTE_H

#include <QDialog>
#include <QList>
#include <QString>
#include <QIcon>
#include <QCommandLinkButton>
#include <QVBoxLayout>
#include <QLineEdit>

class HtmlButton;
class QThreadPool;
class QScrollArea;
class QTimer;
class CommandPalette : public QWidget
{
    Q_OBJECT

    public:
        class Entry
        {
            public:
                Entry() = default;
                virtual ~Entry() = default;

                virtual QIcon getIcon() const = 0;
                virtual QString getTitle() const = 0;
                virtual QString getSideLabel() const = 0;
                virtual QString getDetails() const = 0;
                virtual int getScore() const = 0;
                virtual void exec(const QString& searchValue) = 0;
                virtual void incrScore(int value) = 0;
        };

        class SimpleEntry : public Entry
        {
            public:
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void(SimpleEntry*)>& callback);
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void()>& callback);
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, int score, const std::function<void(const QString&)>& callback);
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void(SimpleEntry*)>& callback);
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void()>& callback);
                SimpleEntry(const QIcon& icon, const QString& title, const QString& details, const QString& sideLabel, int score, const std::function<void(const QString&)>& callback);

                QIcon getIcon() const override;
                QString getTitle() const override;
                QString getDetails() const override;
                QString getSideLabel() const override;
                void exec(const QString& searchValue) override;
                int getScore() const override;
                void incrScore(int value) override;

            private:
                QIcon icon;
                QString title;
                QString details;
                QString sideLabel;
                int score;
                std::function<void(SimpleEntry*)> callback;
                std::function<void(const QString&)> searchValueCallback;
                std::function<void()> noArgCallback;
        };

        class Provider
        {
            public:
                Provider() = default;
                virtual ~Provider() = default;

                /**
                 * Entries returned by provier are owned by the CommandPalette and it will destroy all returned entries when they are no longer needed.
                 */
                virtual QList<Entry*> getEntries(const QString& search) = 0;
        };

        CommandPalette(QWidget* parent);
        ~CommandPalette() override;

        int preferredHeight() const;
        QSize sizeHint() const override;
        void registerProvider(Provider* provider);
        void deregisterProvider(Provider* provider);

        static constexpr int MIN_HEIGHT = 80;
        static constexpr int WIDTH = 640;
        static constexpr const char* SEARCH_CONTEXT = "CommandPaletteContext";

    protected:
        void hideEvent(QHideEvent* event) override;
        void showEvent(QShowEvent* event) override;
        bool eventFilter(QObject* watched, QEvent* event) override;

    private:
        void buildUi();
        void rebuildEntryButtons();
        void selectEntry(int index);
        void executeSelectedEntry();
        void initProviders();
        void focusSearch();
        void cleanUp();

        QLineEdit* searchEdit = nullptr;
        QVBoxLayout* entriesLayout = nullptr;
        QVBoxLayout* mainLayout = nullptr;
        QFrame* separator = nullptr;
        QWidget* entriesContainer = nullptr;
        QScrollArea* scrollArea = nullptr;
        QTimer* searchTimer = nullptr;
        QList<Entry*> matchedEntries;
        QList<Provider*> providers;
        // QList<QCommandLinkButton*> entryButtons;
        QList<HtmlButton*> entryButtons;

        int selectedEntryIndex = -1;

    private slots:
        void runSearch();

    signals:
        void hidden();
};

#endif // COMMANDPALETTE_H
