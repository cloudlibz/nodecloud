/*This is an auto generated class, please do not change.*/
/**
* Class to create a Databases object
* @category Digital Ocean
*/
class DO_RDBMS {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._databases = this._instance.databases;
    }
    /**
    * Trigers the getAllClusters function of Databases
    * @param {StringKeyword} tagName - Data required for getAllClusters
    * @param {BooleanKeyword} includeAll - Data required for getAllClusters
    * @param {NumberKeyword} page - Data required for getAllClusters
    * @param {NumberKeyword} pageSize - Data required for getAllClusters
    * @returns {Promise<getAllClustersResponse>}
    */
    getClusters(tagName, includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._databases.getAllClusters(tagName, includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the createCluster function of Databases
    * @param {DatabaseCreateClusterRequest} clusterOptions - Data required for createCluster
    * @returns {Promise<createClusterResponse>}
    */
    createCluster(clusterOptions) {
        return new Promise((resolve, reject) => {
            this._databases.createCluster(clusterOptions)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getClusterById function of Databases
    * @param {StringKeyword} clusterId - Data required for getClusterById
    * @returns {Promise<getClusterByIdResponse>}
    */
    getCluster(clusterId) {
        return new Promise((resolve, reject) => {
            this._databases.getClusterById(clusterId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the resizeCluster function of Databases
    * @param {StringKeyword} clusterId - Data required for resizeCluster
    * @param {DatabaseResizeClusterRequest} configuration - Data required for resizeCluster
    * @returns {Promise<resizeClusterResponse>}
    */
    updateCluster(clusterId, configuration) {
        return new Promise((resolve, reject) => {
            this._databases.resizeCluster(clusterId, configuration)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_RDBMS;
