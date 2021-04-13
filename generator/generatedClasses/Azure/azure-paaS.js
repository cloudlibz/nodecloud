const { WebSiteManagementClient } = require("@azure/arm-appservice");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a PaaS object
 * @category Azure
 */
class Azure_PaaS {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} siteEnvelope - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, name, siteEnvelope, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.createOrUpdate(resourceGroupName, name, siteEnvelope, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} siteEnvelope - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    update(resourceGroupName, name, siteEnvelope, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.update(resourceGroupName, name, siteEnvelope, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the get function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describe(resourceGroupName, name, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.get(resourceGroupName, name, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, name, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.deleteMethod(resourceGroupName, name, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the restart function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<restartResponse>}
     */
    restart(resourceGroupName, name, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.restart(resourceGroupName, name, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createOrUpdate function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} hostingEnvironmentEnvelope - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createEnvironment(resourceGroupName, name, hostingEnvironmentEnvelope, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.appServiceEnvironments.createOrUpdate(resourceGroupName, name, hostingEnvironmentEnvelope, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the update function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} hostingEnvironmentEnvelope - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateResponse>}
     */
    updateEnvironment(resourceGroupName, name, hostingEnvironmentEnvelope, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.appServiceEnvironments.update(resourceGroupName, name, hostingEnvironmentEnvelope, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createOrUpdateSlot function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} siteEnvelope - Mandatory parameter
     * @param {StringKeyword} slot - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateSlotResponse>}
     */
    createConfigTemplate(resourceGroupName, name, siteEnvelope, slot, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.createOrUpdateSlot(resourceGroupName, name, siteEnvelope, slot, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getSlot function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {StringKeyword} slot - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getSlotResponse>}
     */
    describeConfigSettings(resourceGroupName, name, slot, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.getSlot(resourceGroupName, name, slot, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteSlot function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {StringKeyword} slot - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteSlotResponse>}
     */
    deleteConfigTemplate(resourceGroupName, name, slot, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.webApps.deleteSlot(resourceGroupName, name, slot, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the checkAvailability function of appservice
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<checkAvailabilityResponse>}
     */
    checkDNSAvailability(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.domains.checkAvailability(options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of appservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    terminateEnvironment(resourceGroupName, name, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new WebSiteManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.appServiceEnvironments.deleteMethod(resourceGroupName, name, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_PaaS;
