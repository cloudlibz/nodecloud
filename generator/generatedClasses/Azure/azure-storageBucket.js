const { StorageManagementClient } = require("@azure/arm-storage");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a StorageBucket object
 * @category Azure
 */
class Azure_StorageBucket {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the create function of storage
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} containerName - Mandatory parameter
     * @param {TypeReference} blobContainer - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createResponse>}
     */
    create(resourceGroupName, accountName, containerName, blobContainer, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new StorageManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.blobContainers.create(resourceGroupName, accountName, containerName, blobContainer, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of storage
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {StringKeyword} containerName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, accountName, containerName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new StorageManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.blobContainers.deleteMethod(resourceGroupName, accountName, containerName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the list function of storage
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} accountName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    list(resourceGroupName, accountName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new StorageManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.blobContainers.list(resourceGroupName, accountName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_StorageBucket;
