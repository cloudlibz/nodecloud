/*This is an auto generated class, please do not change.*/
/**
 * Class to create a EC2 object
 * @category AWS
 */
class AWS_ComputeInstance {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._eC2 = new this._AWS.EC2({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createTags function of EC2
     * @param {CreateTagsRequest} params - Data required for createTags
     * @returns {Promise<createTagsResponse>}
     */
    addTags(params) {
        return new Promise((resolve, reject) => {
            this._eC2.createTags(params, (error, data) => {
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
     * Trigers the describeInstances function of EC2
     * @param {DescribeInstancesRequest} params - Data required for describeInstances
     * @returns {Promise<describeInstancesResponse>}
     */
    list(params) {
        return new Promise((resolve, reject) => {
            this._eC2.describeInstances(params, (error, data) => {
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
     * Trigers the monitorInstances function of EC2
     * @param {MonitorInstancesRequest} params - Data required for monitorInstances
     * @returns {Promise<monitorInstancesResponse>}
     */
    monitor(params) {
        return new Promise((resolve, reject) => {
            this._eC2.monitorInstances(params, (error, data) => {
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
     * Trigers the rebootInstances function of EC2
     * @param {RebootInstancesRequest} params - Data required for rebootInstances
     * @returns {Promise<rebootInstancesResponse>}
     */
    reboot(params) {
        return new Promise((resolve, reject) => {
            this._eC2.rebootInstances(params, (error, data) => {
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
     * Trigers the runInstances function of EC2
     * @param {RunInstancesRequest} params - Data required for runInstances
     * @returns {Promise<runInstancesResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._eC2.runInstances(params, (error, data) => {
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
     * Trigers the startInstances function of EC2
     * @param {StartInstancesRequest} params - Data required for startInstances
     * @returns {Promise<startInstancesResponse>}
     */
    start(params) {
        return new Promise((resolve, reject) => {
            this._eC2.startInstances(params, (error, data) => {
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
     * Trigers the stopInstances function of EC2
     * @param {StopInstancesRequest} params - Data required for stopInstances
     * @returns {Promise<stopInstancesResponse>}
     */
    stop(params) {
        return new Promise((resolve, reject) => {
            this._eC2.stopInstances(params, (error, data) => {
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
     * Trigers the terminateInstances function of EC2
     * @param {TerminateInstancesRequest} params - Data required for terminateInstances
     * @returns {Promise<terminateInstancesResponse>}
     */
    destroy(params) {
        return new Promise((resolve, reject) => {
            this._eC2.terminateInstances(params, (error, data) => {
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
     * Trigers the unmonitorInstances function of EC2
     * @param {UnmonitorInstancesRequest} params - Data required for unmonitorInstances
     * @returns {Promise<unmonitorInstancesResponse>}
     */
    unmonitor(params) {
        return new Promise((resolve, reject) => {
            this._eC2.unmonitorInstances(params, (error, data) => {
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
module.exports = AWS_ComputeInstance;
