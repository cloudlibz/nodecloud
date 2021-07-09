/*This is an auto generated class, please do not change.*/
/**
* Class to create a Kubernetes object
* @category Digital Ocean
*/
class DO_Kubernetes {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._kubernetes = this._instance.kubernetes;
    }
    /**
    * Trigers the getClusters function of Kubernetes
    * @param {BooleanKeyword} includeAll - Data required for getClusters
    * @param {NumberKeyword} page - Data required for getClusters
    * @param {NumberKeyword} pageSize - Data required for getClusters
    * @returns {Promise<getClustersResponse>}
    */
    listClusters(includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._kubernetes.getClusters(includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the create function of Kubernetes
    * @param {NewClusterRequest} options - Data required for create
    * @returns {Promise<createResponse>}
    */
    create(options) {
        return new Promise((resolve, reject) => {
            this._kubernetes.create(options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getById function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for getById
    * @returns {Promise<getByIdResponse>}
    */
    describeCluster(clusterId) {
        return new Promise((resolve, reject) => {
            this._kubernetes.getById(clusterId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the delete function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for delete
    * @returns {Promise<deleteResponse>}
    */
    delete(clusterId) {
        return new Promise((resolve, reject) => {
            this._kubernetes.delete(clusterId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getNodePools function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for getNodePools
    * @param {BooleanKeyword} includeAll - Data required for getNodePools
    * @param {NumberKeyword} page - Data required for getNodePools
    * @param {NumberKeyword} pageSize - Data required for getNodePools
    * @returns {Promise<getNodePoolsResponse>}
    */
    listNodegroups(clusterId, includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._kubernetes.getNodePools(clusterId, includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getNodePoolById function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for getNodePoolById
    * @param {StringKeyword} nodePoolId - Data required for getNodePoolById
    * @returns {Promise<getNodePoolByIdResponse>}
    */
    describeNodeGroup(clusterId, nodePoolId) {
        return new Promise((resolve, reject) => {
            this._kubernetes.getNodePoolById(clusterId, nodePoolId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the addNodePool function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for addNodePool
    * @param {ClusterNodePool} nodePool - Data required for addNodePool
    * @returns {Promise<addNodePoolResponse>}
    */
    createNodeGroup(clusterId, nodePool) {
        return new Promise((resolve, reject) => {
            this._kubernetes.addNodePool(clusterId, nodePool)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the deleteNodePool function of Kubernetes
    * @param {StringKeyword} clusterId - Data required for deleteNodePool
    * @param {StringKeyword} nodePoolId - Data required for deleteNodePool
    * @returns {Promise<deleteNodePoolResponse>}
    */
    deleteNodegroup(clusterId, nodePoolId) {
        return new Promise((resolve, reject) => {
            this._kubernetes.deleteNodePool(clusterId, nodePoolId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_Kubernetes;
