#ifndef MULTIEDITORTEXT_H
#define MULTIEDITORTEXT_H

#include "multieditorwidget.h"
#include "multieditorwidgetplugin.h"
#include "common/extactioncontainer.h"
#include "plugins/builtinplugin.h"

class QPlainTextEdit;
class QMenu;

CFG_KEY_LIST(MultiEditorText, QObject::tr("Cell text value editor"),
     CFG_KEY_ENTRY(CUT,     QKeySequence::Cut,      QObject::tr("Cut selected text"))
     CFG_KEY_ENTRY(COPY,    QKeySequence::Copy,     QObject::tr("Copy selected text"))
     CFG_KEY_ENTRY(PASTE,   QKeySequence::Paste,    QObject::tr("Paste from clipboard"))
     CFG_KEY_ENTRY(DELETE,  QKeySequence::Delete,   QObject::tr("Delete selected text"))
     CFG_KEY_ENTRY(UNDO,    QKeySequence::Undo,     QObject::tr("Undo"))
     CFG_KEY_ENTRY(REDO,    QKeySequence::Redo,     QObject::tr("Redo"))
)

class GUI_API_EXPORT MultiEditorText : public MultiEditorWidget, public ExtActionContainer
{
    Q_OBJECT

    public:
        enum Action
        {
            TAB_CHANGES_FOCUS,
            CUT,
            COPY,
            PASTE,
            DELETE,
            UNDO,
            REDO
        };
        Q_ENUM(Action)

        enum ToolBar
        {
        };

        explicit MultiEditorText(QWidget *parent = 0);

        void setValue(const QVariant& value);
        QVariant getValue();
        void setReadOnly(bool value);
        QToolBar* getToolBar(int toolbar) const;
        void focusThisWidget();
        QList<QWidget*> getNoScrollWidgets();
        SearchTextLocator* getTextLocator();

        static QString getValueFromPlainTextEdit(const QString& originalText, QPlainTextEdit* textEdit);
        static QString restoreOriginalSeparatorsWithDiff(const QString& originalText, const QString& currentRawText);

    protected:
        void createActions();
        void setupDefShortcuts();

    private:
        void setupMenu();

        static bool isOriginalOrEditorLineBreak(QChar ch);
        static bool isQTextDocumentSeparator(QChar ch);
        static QString normalizedForDiff(QString text);
        static QVector<int> buildCurrentToOriginalMap(const QString& originalText, const QString& currentText);

        QPlainTextEdit* textEdit = nullptr;
        QMenu* contextMenu = nullptr;
        SearchTextLocator* textLocator = nullptr;
        QString originalText;

    private slots:
        void modificationChanged(bool changed);
        void deleteSelected();
        void showCustomMenu(const QPoint& point);
        void updateUndoAction(bool enabled);
        void updateRedoAction(bool enabled);
        void updateCopyAction(bool enabled);
        void toggleTabFocus();
};

class GUI_API_EXPORT MultiEditorTextPlugin : public BuiltInPlugin, public MultiEditorWidgetPlugin
{
    Q_OBJECT

    LETOS_PLUGIN_AUTHOR("letos.org")
    LETOS_PLUGIN_DESC("Standard text data editor.")
    LETOS_PLUGIN_TITLE("Text")
    LETOS_PLUGIN_VERSION(10000)

    public:
        MultiEditorWidget* getInstance();
        bool validFor(const DataType& dataType);
        int getPriority(const QVariant& value, const DataType& dataType);
        QString getTabLabel();
};

#endif // MULTIEDITORTEXT_H
