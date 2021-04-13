const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a NoSql object
 * @category Azure
 */
class Azure_NoSql {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createUpdateTable function of cosmosdb
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} tableName - Mandatory parameter
     * @param {TypeReference} createUpdateTableParameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createUpdateTableResponse>}
     */
    createCollection(resourceGroupName, accountName, tableName, createUpdateTableParameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new CosmosDBManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.tableResources.createUpdateTable(resourceGroupName, accountName, tableName, createUpdateTableParameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteTable function of cosmosdb
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} tableName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteTableResponse>}
     */
    deleteCollection(resourceGroupName, accountName, tableName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new CosmosDBManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.tableResources.deleteTable(resourceGroupName, accountName, tableName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listTables function of cosmosdb
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listTablesResponse>}
     */
    listCollections(resourceGroupName, accountName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new CosmosDBManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.tableResources.listTables(resourceGroupName, accountName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateTableThroughput function of cosmosdb
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} tableName - Mandatory parameter
     * @param {TypeReference} updateThroughputParameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateTableThroughputResponse>}
     */
    setAttribute(resourceGroupName, accountName, tableName, updateThroughputParameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new CosmosDBManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.tableResources.updateTableThroughput(resourceGroupName, accountName, tableName, updateThroughputParameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getTable function of cosmosdb
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} tableName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getTableResponse>}
     */
    getAttributes(resourceGroupName, accountName, tableName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new CosmosDBManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.tableResources.getTable(resourceGroupName, accountName, tableName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_NoSql;
