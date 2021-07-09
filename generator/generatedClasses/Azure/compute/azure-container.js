const { ContainerServiceClient } = require("@azure/arm-containerservice");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Container object
 * @category Azure
 */
class Azure_Container {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} containerServiceName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, containerServiceName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.containerServices.createOrUpdate(resourceGroupName, containerServiceName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} containerServiceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, containerServiceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.containerServices.deleteMethod(resourceGroupName, containerServiceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} containerServiceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describe(resourceGroupName, containerServiceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.containerServices.get(resourceGroupName, containerServiceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the list function of containerservice
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    list(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.containerServices.list(options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_Container;
