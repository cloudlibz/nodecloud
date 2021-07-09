const { ContainerServiceClient } = require("@azure/arm-containerservice");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Kubernetes object
 * @category Azure
 */
class Azure_Kubernetes {
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
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    create(resourceGroupName, resourceName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.createOrUpdate(resourceGroupName, resourceName, parameters, options).then(result => {
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
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    delete(resourceGroupName, resourceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.deleteMethod(resourceGroupName, resourceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateTags function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<updateTagsResponse>}
     */
    updateTags(resourceGroupName, resourceName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.updateTags(resourceGroupName, resourceName, parameters, options).then(result => {
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
    listClusters(options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.list(options).then(result => {
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
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describeCluster(resourceGroupName, resourceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.get(resourceGroupName, resourceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createOrUpdate function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {StringKeyword} agentPoolName - Mandatory parameter
     * @param {TypeReference} parameters - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<createOrUpdateResponse>}
     */
    createNodeGroup(resourceGroupName, resourceName, agentPoolName, parameters, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.agentPools.createOrUpdate(resourceGroupName, resourceName, agentPoolName, parameters, options).then(result => {
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
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {StringKeyword} agentPoolName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteMethodResponse>}
     */
    deleteNodegroup(resourceGroupName, resourceName, agentPoolName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.agentPools.deleteMethod(resourceGroupName, resourceName, agentPoolName, options).then(result => {
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
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {StringKeyword} agentPoolName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getResponse>}
     */
    describeNodeGroup(resourceGroupName, resourceName, agentPoolName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.agentPools.get(resourceGroupName, resourceName, agentPoolName, options).then(result => {
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
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<listResponse>}
     */
    listNodegroups(resourceGroupName, resourceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.agentPools.list(resourceGroupName, resourceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the rotateClusterCertificates function of containerservice
     * @param {StringKeyword} resourceGroupName - Mandatory parameter
     * @param {StringKeyword} resourceName - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<rotateClusterCertificatesResponse>}
     */
    updateConfig(resourceGroupName, resourceName, options = undefined) {
        return new Promise((resolve, reject) => {
            this._azureRestSdk
                .loginWithServicePrincipalSecretWithAuthResponse(process.env.AZURE_CLIENT_ID, process.env.AZURE_CLIENT_SECRET, process.env.AZURE_TENANT_ID)
                .then(authres => {
                const client = new ContainerServiceClient(authres.credentials, process.env.AZURE_SUBSCRIPTION_ID);
                client.managedClusters.rotateClusterCertificates(resourceGroupName, resourceName, options).then(result => {
                    resolve(result);
                });
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = Azure_Kubernetes;
