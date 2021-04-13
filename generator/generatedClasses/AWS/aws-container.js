/*This is an auto generated class, please do not change.*/
/**
 * Class to create a ECS object
 * @category AWS
 */
class AWS_Container {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._eCS = new this._AWS.ECS({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createCluster function of ECS
     * @param {CreateClusterRequest} params - Data required for createCluster
     * @returns {Promise<createClusterResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._eCS.createCluster(params, (error, data) => {
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
     * Trigers the deleteCluster function of ECS
     * @param {DeleteClusterRequest} params - Data required for deleteCluster
     * @returns {Promise<deleteClusterResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._eCS.deleteCluster(params, (error, data) => {
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
     * Trigers the describeClusters function of ECS
     * @param {DescribeClustersRequest} params - Data required for describeClusters
     * @returns {Promise<describeClustersResponse>}
     */
    describe(params) {
        return new Promise((resolve, reject) => {
            this._eCS.describeClusters(params, (error, data) => {
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
     * Trigers the listClusters function of ECS
     * @param {ListClustersRequest} params - Data required for listClusters
     * @returns {Promise<listClustersResponse>}
     */
    list(params) {
        return new Promise((resolve, reject) => {
            this._eCS.listClusters(params, (error, data) => {
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
module.exports = AWS_Container;
