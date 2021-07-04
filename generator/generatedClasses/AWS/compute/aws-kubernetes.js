/*This is an auto generated class, please do not change.*/
/**
 * Class to create a EKS object
 * @category AWS
 */
class AWS_Kubernetes {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._eKS = new this._AWS.EKS({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createCluster function of EKS
     * @param {CreateClusterRequest} params - Data required for createCluster
     * @returns {Promise<createClusterResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._eKS.createCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the createNodegroup function of EKS
     * @param {CreateNodegroupRequest} params - Data required for createNodegroup
     * @returns {Promise<createNodegroupResponse>}
     */
    createNodeGroup(params) {
        return new Promise((resolve, reject) => {
            this._eKS.createNodegroup(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the deleteCluster function of EKS
     * @param {DeleteClusterRequest} params - Data required for deleteCluster
     * @returns {Promise<deleteClusterResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._eKS.deleteCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the deleteNodegroup function of EKS
     * @param {DeleteNodegroupRequest} params - Data required for deleteNodegroup
     * @returns {Promise<deleteNodegroupResponse>}
     */
    deleteNodegroup(params) {
        return new Promise((resolve, reject) => {
            this._eKS.deleteNodegroup(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the describeCluster function of EKS
     * @param {DescribeClusterRequest} params - Data required for describeCluster
     * @returns {Promise<describeClusterResponse>}
     */
    describeCluster(params) {
        return new Promise((resolve, reject) => {
            this._eKS.describeCluster(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the describeNodegroup function of EKS
     * @param {DescribeNodegroupRequest} params - Data required for describeNodegroup
     * @returns {Promise<describeNodegroupResponse>}
     */
    describeNodeGroup(params) {
        return new Promise((resolve, reject) => {
            this._eKS.describeNodegroup(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the listClusters function of EKS
     * @param {ListClustersRequest} params - Data required for listClusters
     * @returns {Promise<listClustersResponse>}
     */
    listClusters(params) {
        return new Promise((resolve, reject) => {
            this._eKS.listClusters(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the listNodegroups function of EKS
     * @param {ListNodegroupsRequest} params - Data required for listNodegroups
     * @returns {Promise<listNodegroupsResponse>}
     */
    listNodegroups(params) {
        return new Promise((resolve, reject) => {
            this._eKS.listNodegroups(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the tagResource function of EKS
     * @param {TagResourceRequest} params - Data required for tagResource
     * @returns {Promise<tagResourceResponse>}
     */
    updateTags(params) {
        return new Promise((resolve, reject) => {
            this._eKS.tagResource(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    /**
     * Trigers the updateClusterConfig function of EKS
     * @param {UpdateClusterConfigRequest} params - Data required for updateClusterConfig
     * @returns {Promise<updateClusterConfigResponse>}
     */
    updateConfig(params) {
        return new Promise((resolve, reject) => {
            this._eKS.updateClusterConfig(params, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
module.exports = AWS_Kubernetes;
