const { ComputeManagementClient } = require("@azure/arm-compute");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a ComputeInstance object
 * @category Azure
 */
class Azure_ComputeInstance {
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
     * @param {StringKeyword} vmName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, vmName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.createOrUpdate(resourceGroupName, vmName, parameters, options).then(result => {
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
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    list(resourceGroupName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.list(resourceGroupName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the start function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vmName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<startResponse>}
     */
    start(resourceGroupName, vmName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.start(resourceGroupName, vmName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the powerOff function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vmName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<powerOffResponse>}
     */
    stop(resourceGroupName, vmName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.powerOff(resourceGroupName, vmName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the restart function of compute
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} vmName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<restartResponse>}
     */
    reboot(resourceGroupName, vmName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.restart(resourceGroupName, vmName, options).then(result => {
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
     * @param {StringKeyword} vmName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    destroy(resourceGroupName, vmName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ComputeManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.virtualMachines.deleteMethod(resourceGroupName, vmName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_ComputeInstance;
