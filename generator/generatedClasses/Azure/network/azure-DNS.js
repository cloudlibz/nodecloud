const { DnsManagementClient } = require("@azure/arm-dns");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a DNS object
 * @category Azure
 */
class Azure_DNS {
    /**
     *
     * @param {module} azureRestSdk Azure Rest SDK
     */
    constructor(azureRestSdk) {
        this._azureRestSdk = azureRestSdk;
    }
    /**
     * Trigers the createOrUpdate function of dns
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} zoneName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createZone(resourceGroupName, zoneName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new DnsManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.zones.createOrUpdate(resourceGroupName, zoneName, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteMethod function of dns
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} zoneName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    deleteZone(resourceGroupName, zoneName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new DnsManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.zones.deleteMethod(resourceGroupName, zoneName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the list function of dns
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    listZones(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new DnsManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.zones.list(options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createOrUpdate function of dns
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} zoneName - Mandatory parameter
     * @param {StringKeyword} relativeRecordSetName - Mandatory parameter
     * @param {TypeReference} recordType - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    changeRecordSets(resourceGroupName, zoneName, relativeRecordSetName, recordType, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new DnsManagementClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.recordSets.createOrUpdate(resourceGroupName, zoneName, relativeRecordSetName, recordType, parameters, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_DNS;
