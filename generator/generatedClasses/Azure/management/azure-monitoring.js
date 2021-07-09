const { MonitorManagementClient } = require("@azure/arm-monitor");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Monitoring object
 * @category Azure
 */
class Azure_Monitoring {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of monitor
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} ruleName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createAlarm(resourceGroupName, ruleName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new MonitorManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.alertRules.createOrUpdate(resourceGroupName, ruleName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of monitor
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} ruleName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    deleteAlarm(resourceGroupName, ruleName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new MonitorManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.alertRules.deleteMethod(resourceGroupName, ruleName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of monitor
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} ruleName - Mandatory parameter
     * @param {TypeReference} alertRulesResource - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    updateAlarm(resourceGroupName, ruleName, alertRulesResource, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new MonitorManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.alertRules.update(resourceGroupName, ruleName, alertRulesResource, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listBySubscription function of monitor
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listBySubscriptionResponse>}
     */
    listAlarms(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new MonitorManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.alertRules.listBySubscription(options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of monitor
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} ruleName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    getMetricData(resourceGroupName, ruleName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new MonitorManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.alertRules.get(resourceGroupName, ruleName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_Monitoring;
