const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a KeyManagement object
 * @category Azure
 */
class Azure_KeyManagement {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of keyvault
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vaultName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createKey(resourceGroupName, vaultName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new KeyVaultManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.vaults.createOrUpdate(resourceGroupName, vaultName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of keyvault
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vaultName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    deleteKey(resourceGroupName, vaultName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new KeyVaultManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.vaults.deleteMethod(resourceGroupName, vaultName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of keyvault
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vaultName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    update(resourceGroupName, vaultName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new KeyVaultManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.vaults.update(resourceGroupName, vaultName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of keyvault
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vaultName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describeKey(resourceGroupName, vaultName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new KeyVaultManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.vaults.get(resourceGroupName, vaultName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateAccessPolicy function of keyvault
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vaultName - Mandatory parameter
     * @param {TypeReference} operationKind - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateAccessPolicyResponse>}
     */
    putKeyPolicy(resourceGroupName, vaultName, operationKind, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new KeyVaultManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.vaults.updateAccessPolicy(resourceGroupName, vaultName, operationKind, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_KeyManagement;
