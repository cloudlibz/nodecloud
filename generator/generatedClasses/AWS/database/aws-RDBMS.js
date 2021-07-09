/*This is an auto generated class, please do not change.*/
/**
 * Class to create a RDS object
 * @category AWS
 */
class AWS_RDBMS {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._rDS = new this._AWS.RDS({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createDBCluster function of RDS
     * @param {CreateDBClusterMessage} params - Data required for createDBCluster
     * @returns {Promise<createDBClusterResponse>}
     */
    createDatabse(params) {
        return new Promise((resolve, reject) => {
            this._rDS.createDBCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the createDBSnapshot function of RDS
     * @param {CreateDBSnapshotMessage} params - Data required for createDBSnapshot
     * @returns {Promise<createDBSnapshotResponse>}
     */
    createSnapshots(params) {
        return new Promise((resolve, reject) => {
            this._rDS.createDBSnapshot(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the deleteDBCluster function of RDS
     * @param {DeleteDBClusterMessage} params - Data required for deleteDBCluster
     * @returns {Promise<deleteDBClusterResponse>}
     */
    deleteDatabase(params) {
        return new Promise((resolve, reject) => {
            this._rDS.deleteDBCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the deleteDBSnapshot function of RDS
     * @param {DeleteDBSnapshotMessage} params - Data required for deleteDBSnapshot
     * @returns {Promise<deleteDBSnapshotResponse>}
     */
    deleteDBSnapshot(params) {
        return new Promise((resolve, reject) => {
            this._rDS.deleteDBSnapshot(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the modifyDBCluster function of RDS
     * @param {ModifyDBClusterMessage} params - Data required for modifyDBCluster
     * @returns {Promise<modifyDBClusterResponse>}
     */
    modifyDB(params) {
        return new Promise((resolve, reject) => {
            this._rDS.modifyDBCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the rebootDBInstance function of RDS
     * @param {RebootDBInstanceMessage} params - Data required for rebootDBInstance
     * @returns {Promise<rebootDBInstanceResponse>}
     */
    restoreDatabase(params) {
        return new Promise((resolve, reject) => {
            this._rDS.rebootDBInstance(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
module.exports = AWS_RDBMS;
