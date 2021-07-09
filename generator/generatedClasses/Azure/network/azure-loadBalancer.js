const { NetworkManagementClient } = require("@azure/arm-network");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a LoadBalancer object
 * @category Azure
 */
class Azure_LoadBalancer {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of network
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} loadBalancerName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, loadBalancerName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new NetworkManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.loadBalancers.createOrUpdate(resourceGroupName, loadBalancerName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of network
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} loadBalancerName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, loadBalancerName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new NetworkManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.loadBalancers.deleteMethod(resourceGroupName, loadBalancerName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the list function of network
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    list(resourceGroupName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new NetworkManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.loadBalancers.list(resourceGroupName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateTags function of network
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} loadBalancerName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateTagsResponse>}
     */
    addTags(resourceGroupName, loadBalancerName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new NetworkManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.loadBalancers.updateTags(resourceGroupName, loadBalancerName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of network
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} loadBalancerName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describe(resourceGroupName, loadBalancerName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new NetworkManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.loadBalancers.get(resourceGroupName, loadBalancerName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_LoadBalancer;
