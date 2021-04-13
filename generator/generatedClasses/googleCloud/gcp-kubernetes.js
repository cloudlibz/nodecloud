const { ClusterManagerClient } = require("@google-cloud/container");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Kubernetes object
 * @category Google Cloud
 */
class GCP_Kubernetes {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._clusterManagerClient = new ClusterManagerClient(config);
    }
    /**
     * Trigers the createCluster function of undefined
     * @param {TypeReference} request - Data required for createCluster
     * @param {TypeReference} [options] - Data required for createCluster
     * @returns {Promise<createClusterResponse>}
     */
    create(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.createCluster(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteCluster function of undefined
     * @param {TypeReference} request - Data required for deleteCluster
     * @param {TypeReference} [options] - Data required for deleteCluster
     * @returns {Promise<deleteClusterResponse>}
     */
    delete(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.deleteCluster(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listClusters function of undefined
     * @param {TypeReference} request - Data required for listClusters
     * @param {TypeReference} [options] - Data required for listClusters
     * @returns {Promise<listClustersResponse>}
     */
    listClusters(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.listClusters(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getCluster function of undefined
     * @param {TypeReference} request - Data required for getCluster
     * @param {TypeReference} [options] - Data required for getCluster
     * @returns {Promise<getClusterResponse>}
     */
    describeCluster(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.getCluster(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createNodePool function of undefined
     * @param {TypeReference} request - Data required for createNodePool
     * @param {TypeReference} [options] - Data required for createNodePool
     * @returns {Promise<createNodePoolResponse>}
     */
    createNodeGroup(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.createNodePool(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteNodePool function of undefined
     * @param {TypeReference} request - Data required for deleteNodePool
     * @param {TypeReference} [options] - Data required for deleteNodePool
     * @returns {Promise<deleteNodePoolResponse>}
     */
    deleteNodegroup(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.deleteNodePool(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getNodePool function of undefined
     * @param {TypeReference} request - Data required for getNodePool
     * @param {TypeReference} [options] - Data required for getNodePool
     * @returns {Promise<getNodePoolResponse>}
     */
    describeNodeGroup(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.getNodePool(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listNodePools function of undefined
     * @param {TypeReference} request - Data required for listNodePools
     * @param {TypeReference} [options] - Data required for listNodePools
     * @returns {Promise<listNodePoolsResponse>}
     */
    listNodegroups(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.listNodePools(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the setAddonsConfig function of undefined
     * @param {TypeReference} request - Data required for setAddonsConfig
     * @param {TypeReference} [options] - Data required for setAddonsConfig
     * @returns {Promise<setAddonsConfigResponse>}
     */
    updateConfig(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._clusterManagerClient.setAddonsConfig(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = GCP_Kubernetes;
