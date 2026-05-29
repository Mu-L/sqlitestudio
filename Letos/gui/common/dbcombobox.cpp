#include "dbcombobox.h"
#include "dblistmodel.h"
#include "db/db.h"

#include <QScopedValueRollback>

DbComboBox::DbComboBox(QWidget* parent) : QComboBox(parent)
{
    dbComboModel = new DbListModel(this);
    dbComboModel->setCombo(this);
    setModel(dbComboModel);
    setEditable(false);
    connect(dbComboModel, SIGNAL(listCleared()), this, SLOT(handleListCleared()));
    connect(this, &QComboBox::currentTextChanged, this, &DbComboBox::validateTextChanged);
    prevIdx = currentIndex();
}

DbListModel* DbComboBox::getModel() const
{
    return dbComboModel;
}

void DbComboBox::setCurrentDb(Db* db)
{
    setCurrentIndex(dbComboModel->getIndexForDb(db));

    // NOTE: The verifiedDbChanged() signal is not emitted from here, because setCurrentDb()
    // is (and always should be) programatically used to set initial state of the owning widget
    // and the verifiedDbChanged() notifies about changes by user interaction to prevent
    // the change if user want's to do something forbidden, or reverts the decision.
}

Db* DbComboBox::currentDb() const
{
    return dbComboModel->getDb(currentIndex());
}

DbComboBox::ChoiceValidator DbComboBox::getChoiceValidator() const
{
    return choiceValidator;
}

void DbComboBox::setChoiceValidator(const ChoiceValidator& newChoiceValidator)
{
    choiceValidator = newChoiceValidator;
}

void DbComboBox::handleListCleared()
{
    emit currentTextChanged(QString());
}

void DbComboBox::validateIndexChanged(int idx)
{
    if (internalChange)
        return;

    if (choiceValidator)
    {
        if (!choiceValidator(currentDb()))
        {
            internalChange = true;
            setCurrentIndex(prevIdx);
            internalChange = false;
            return;
        }
    }

    prevIdx = idx;
    emit verifiedDbChanged();
}

void DbComboBox::validateTextChanged(const QString& text)
{
    int idx = currentIndex();
    validateIndexChanged(idx);
}
