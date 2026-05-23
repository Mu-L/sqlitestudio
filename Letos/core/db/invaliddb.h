#ifndef INVALIDDB_H
#define INVALIDDB_H

#include "db/db.h"

class API_EXPORT InvalidDb : public Db
{
    public:
        InvalidDb(const QString& name, const QString& path, const QHash<QString, QVariant>& connOptions);

        bool isOpen() override;
        QString getName() const override;
        QString getPath() const override;
        quint8 getVersion() const override;
        QString getEncoding() override;
        QHash<QString, QVariant>& getConnectionOptions() override;
        void setName(const QString& value) override;
        void setPath(const QString& value) override;
        void setConnectionOptions(const QHash<QString, QVariant>& value) override;
        void setTimeout(int secs) override;
        int getTimeout() const override;
        QList<AliasedColumn> columnsForQuery(const QString& query) override;
        SqlQueryPtr exec(const QString& query, const QList<QVariant>& args, Flags flags) override;
        SqlQueryPtr exec(const QString& query, const QHash<QString, QVariant>& args, Flags flags) override;
        SqlQueryPtr exec(const QString& query, Db::Flags flags) override;
        SqlQueryPtr exec(const QString& query, const QVariant& arg) override;
        SqlQueryPtr exec(const QString& query, std::initializer_list<QVariant> argList) override;
        SqlQueryPtr exec(const QString& query, std::initializer_list<std::pair<QString, QVariant> > argMap) override;
        void asyncExec(const QString& query, const QList<QVariant>& args, QueryResultsHandler resultsHandler, Flags flags) override;
        void asyncExec(const QString& query, const QHash<QString, QVariant>& args, QueryResultsHandler resultsHandler, Flags flags) override;
        void asyncExec(const QString& query, QueryResultsHandler resultsHandler, Flags flags) override;
        quint32 asyncExec(const QString& query, const QList<QVariant>& args, Flags flags) override;
        quint32 asyncExec(const QString& query, const QHash<QString, QVariant>& args, Flags flags) override;
        quint32 asyncExec(const QString& query, Flags flags) override;
        SqlQueryPtr prepare(const QString& query) override;
        bool begin(bool noLock = false) override;
        bool commit(bool noLock = false) override;
        bool rollback(bool noLock = false) override;
        bool begin(const QString& txName, bool noLock) override;
        bool commit(const QString& txName, bool noLock) override;
        bool rollback(const QString& txName, bool noLock) override;
        QString beginNamed(bool noLock) override;
        void asyncInterrupt() override;
        bool isReadable() override;
        bool isWritable() override;
        QString attach(Db* otherDb, bool silent) override;
        AttachGuard guardedAttach(Db* otherDb, bool silent) override;
        void detach(Db* otherDb) override;
        void detachAll() override;
        const QHash<Db*, QString>& getAttachedDatabases() override;
        QSet<QString> getAllAttaches() override;
        QString getUniqueNewObjectName(const QString& attachedDbName) override;
        QString getErrorText() override;
        int getErrorCode() override;
        QString getTypeLabel() const override;
        QString getTypeClassName() const override;
        bool initAfterCreated() override;
        bool deregisterFunction(const QString& name, int argCount) override;
        bool registerScalarFunction(const QString& name, int argCount, bool deterministic) override;
        bool registerAggregateFunction(const QString& name, int argCount, bool deterministic) override;
        bool registerAggregateWindowFunction(const QString& name, int argCount, bool deterministic) override;
        bool registerCollation(const QString& name) override;
        bool deregisterCollation(const QString& name) override;
        void interrupt() override;
        bool isValid() const override;
        QString getError() const;
        void setError(const QString& value);
        bool loadExtension(const QString& filePath, const QString& initFunc) override;
        bool loadExtensionManually(const QString &filePath, const QString &initFunc) override;
        bool isComplete(const QString& sql) const override;
        Db* clone() const override;
        bool isTransactionActive() const override;
        QList<LoadedExtension> getManuallyLoadedExtensions() const override;
        void copyStateFrom(Db*) override;

    public slots:
        bool open() override;
        bool close() override;
        bool openQuiet() override;
        bool openForProbing() override;
        bool closeQuiet() override;
        void registerUserFunctions() override;
        void registerUserCollations() override;

    private:
        QString name;
        QString path;
        QHash<QString, QVariant> connOptions;
        int timeout = 0;
        QHash<Db*, QString> attachedDbs;
        QString error;
};

#endif // INVALIDDB_H
