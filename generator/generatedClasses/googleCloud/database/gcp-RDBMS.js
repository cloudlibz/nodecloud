const { DatabaseAdminClient } = require("@google-cloud/spanner");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a RDBMS object
 * @category Google Cloud
 */
class GCP_RDBMS {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._databaseAdminClient = new DatabaseAdminClient(config);
    }
    /**
     * Trigers the createDatabase function of undefined
     * @param {TypeReference} request - Data required for createDatabase
     * @param {TypeReference} [options] - Data required for createDatabase
     * @returns {Promise<createDatabaseResponse>}
     */
    createDatabse(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.createDatabase(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the dropDatabase function of undefined
     * @param {TypeReference} request - Data required for dropDatabase
     * @param {TypeReference} [options] - Data required for dropDatabase
     * @returns {Promise<dropDatabaseResponse>}
     */
    deleteDatabase(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.dropDatabase(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createBackup function of undefined
     * @param {TypeReference} request - Data required for createBackup
     * @param {TypeReference} [options] - Data required for createBackup
     * @returns {Promise<createBackupResponse>}
     */
    createSnapshots(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.createBackup(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateDatabaseDdl function of undefined
     * @param {TypeReference} request - Data required for updateDatabaseDdl
     * @param {TypeReference} [options] - Data required for updateDatabaseDdl
     * @returns {Promise<updateDatabaseDdlResponse>}
     */
    modifyDB(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.updateDatabaseDdl(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the restoreDatabase function of undefined
     * @param {TypeReference} request - Data required for restoreDatabase
     * @param {TypeReference} [options] - Data required for restoreDatabase
     * @returns {Promise<restoreDatabaseResponse>}
     */
    restoreDatabase(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.restoreDatabase(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteBackup function of undefined
     * @param {TypeReference} request - Data required for deleteBackup
     * @param {TypeReference} [options] - Data required for deleteBackup
     * @returns {Promise<deleteBackupResponse>}
     */
    deleteDBSnapshot(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._databaseAdminClient.deleteBackup(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the databasePath function of undefined
     * @param {StringKeyword} project - Data required for databasePath
     * @param {StringKeyword} instance - Data required for databasePath
     * @param {StringKeyword} database - Data required for databasePath
     * @returns {Promise<databasePathResponse>}
     */
    databasePath(project, instance, database) {
        return this._databaseAdminClient.databasePath(project, instance, database);
    }
}
module.exports = GCP_RDBMS;
