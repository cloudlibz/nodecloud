/*This is an auto generated class, please do not change.*/
/**
 * Class to create a ELB object
 * @category AWS
 */
class AWS_LoadBalancer {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._eLB = new this._AWS.ELB({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the addTags function of ELB
     * @param {AddTagsInput} params - Data required for addTags
     * @returns {Promise<addTagsResponse>}
     */
    addTags(params) {
        return new Promise((resolve, reject) => {
            this._eLB.addTags(params, (error, data) => {
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
     * Trigers the createLoadBalancer function of ELB
     * @param {CreateAccessPointInput} params - Data required for createLoadBalancer
     * @returns {Promise<createLoadBalancerResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._eLB.createLoadBalancer(params, (error, data) => {
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
     * Trigers the deleteLoadBalancer function of ELB
     * @param {DeleteAccessPointInput} params - Data required for deleteLoadBalancer
     * @returns {Promise<deleteLoadBalancerResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._eLB.deleteLoadBalancer(params, (error, data) => {
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
     * Trigers the describeLoadBalancerAttributes function of ELB
     * @param {DescribeLoadBalancerAttributesInput} params - Data required for describeLoadBalancerAttributes
     * @returns {Promise<describeLoadBalancerAttributesResponse>}
     */
    describe(params) {
        return new Promise((resolve, reject) => {
            this._eLB.describeLoadBalancerAttributes(params, (error, data) => {
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
     * Trigers the describeLoadBalancers function of ELB
     * @param {DescribeAccessPointsInput} params - Data required for describeLoadBalancers
     * @returns {Promise<describeLoadBalancersResponse>}
     */
    list(params) {
        return new Promise((resolve, reject) => {
            this._eLB.describeLoadBalancers(params, (error, data) => {
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
module.exports = AWS_LoadBalancer;
