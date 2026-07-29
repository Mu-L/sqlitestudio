#ifndef STYLEPLUGIN_H
#define STYLEPLUGIN_H

#include <QStylePlugin>

class QWizard;

class FusionLightPlugin : public QStylePlugin
{
        Q_OBJECT
        Q_PLUGIN_METADATA(IID "org.qt-project.Qt.QStyleFactoryInterface" FILE "FusionLightStyle.json")

    public:
        explicit FusionLightPlugin(QObject *parent = nullptr);
        virtual ~FusionLightPlugin();

        static constexpr const char* STYLE_NAME = "fusion light";

    private:
        QStyle *create(const QString &key) override;
};

#endif // STYLEPLUGIN_H
