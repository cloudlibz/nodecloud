const { ComputeManagementClient } = require("@azure/arm-compute");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a BlockStorage object
 * @category Azure
 */
class Azure_BlockStorage {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} diskName - Mandatory parameter
     * @param {TypeReference} disk - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, diskName, disk, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.disks.createOrUpdate(resourceGroupName, diskName, disk, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} diskName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, diskName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.disks.deleteMethod(resourceGroupName, diskName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} diskName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describe(resourceGroupName, diskName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.disks.get(resourceGroupName, diskName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the list function of compute
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    list(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.disks.list(options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} diskName - Mandatory parameter
     * @param {TypeReference} disk - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    update(resourceGroupName, diskName, disk, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.disks.update(resourceGroupName, diskName, disk, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_BlockStorage;
