const { SqlManagementClient } = require("@azure/arm-sql");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a RDBMS object
 * @category Azure
 */
class Azure_RDBMS {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of sql
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} serverName - Mandatory parameter
     * @param {StringKeyword} databaseName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createDatabse(resourceGroupName, serverName, databaseName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new SqlManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.databases.createOrUpdate(resourceGroupName, serverName, databaseName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of sql
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} serverName - Mandatory parameter
     * @param {StringKeyword} databaseName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    deleteDatabase(resourceGroupName, serverName, databaseName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new SqlManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.databases.deleteMethod(resourceGroupName, serverName, databaseName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the exportMethod function of sql
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} serverName - Mandatory parameter
     * @param {StringKeyword} databaseName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<exportMethodResponse>}
     */
    createSnapshots(resourceGroupName, serverName, databaseName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new SqlManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.databases.exportMethod(resourceGroupName, serverName, databaseName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of sql
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} serverName - Mandatory parameter
     * @param {StringKeyword} databaseName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    modifyDB(resourceGroupName, serverName, databaseName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new SqlManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.databases.update(resourceGroupName, serverName, databaseName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the completeRestore function of sql
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} managedInstanceName - Mandatory parameter
     * @param {StringKeyword} databaseName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<completeRestoreResponse>}
     */
    restoreDatabase(resourceGroupName, managedInstanceName, databaseName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new SqlManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedDatabases.completeRestore(resourceGroupName, managedInstanceName, databaseName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_RDBMS;
