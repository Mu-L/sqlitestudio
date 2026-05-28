#ifndef DBCOMBOBOX_H
#define DBCOMBOBOX_H

#include "gui_global.h"
#include <QComboBox>

class QComboBox;
class DbListModel;
class Db;

class GUI_API_EXPORT DbComboBox : public QComboBox
{
    Q_OBJECT

    public:
        typedef std::function<bool(Db* db)> ChoiceValidator;

        explicit DbComboBox(QWidget* parent = nullptr);

        DbListModel* getModel() const;
        void setCurrentDb(Db* db);
        Db* currentDb() const;
        ChoiceValidator getChoiceValidator() const;
        void setChoiceValidator(const ChoiceValidator& newChoiceValidator);

    private:
        DbListModel* dbComboModel = nullptr;
        ChoiceValidator choiceValidator;
        int prevIdx = -1;
        bool internalChange = false;

    signals:
        void verifiedDbChanged();

    private slots:
        void handleListCleared();
        void validateIndexChanged(int idx);
        void validateTextChanged(const QString& text);
};

#endif // DBCOMBOBOX_H
