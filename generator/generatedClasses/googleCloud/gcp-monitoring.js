const { AlertPolicyServiceClient } = require("@google-cloud/monitoring");
const { MetricServiceClient } = require("@google-cloud/monitoring");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Monitoring object
 * @category Google Cloud
 */
class GCP_Monitoring {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._alertPolicyServiceClient = new AlertPolicyServiceClient(config);
        this._metricServiceClient = new MetricServiceClient(config);
    }
    /**
     * Trigers the createAlertPolicy function of undefined
     * @param {TypeReference} request - Data required for createAlertPolicy
     * @param {TypeReference} [options] - Data required for createAlertPolicy
     * @returns {Promise<createAlertPolicyResponse>}
     */
    createAlarm(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._alertPolicyServiceClient.createAlertPolicy(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteAlertPolicy function of undefined
     * @param {TypeReference} request - Data required for deleteAlertPolicy
     * @param {TypeReference} [options] - Data required for deleteAlertPolicy
     * @returns {Promise<deleteAlertPolicyResponse>}
     */
    deleteAlarm(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._alertPolicyServiceClient.deleteAlertPolicy(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateAlertPolicy function of undefined
     * @param {TypeReference} request - Data required for updateAlertPolicy
     * @param {TypeReference} [options] - Data required for updateAlertPolicy
     * @returns {Promise<updateAlertPolicyResponse>}
     */
    updateAlarm(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._alertPolicyServiceClient.updateAlertPolicy(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listAlertPolicies function of undefined
     * @param {TypeReference} request - Data required for listAlertPolicies
     * @param {TypeReference} [options] - Data required for listAlertPolicies
     * @returns {Promise<listAlertPoliciesResponse>}
     */
    listAlarms(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._alertPolicyServiceClient.listAlertPolicies(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getMetricDescriptor function of undefined
     * @param {TypeReference} request - Data required for getMetricDescriptor
     * @param {TypeReference} [options] - Data required for getMetricDescriptor
     * @returns {Promise<getMetricDescriptorResponse>}
     */
    getMetricData(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._metricServiceClient.getMetricDescriptor(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the projectPath function of undefined
     * @param {StringKeyword} project - Data required for projectPath
     * @returns {Promise<projectPathResponse>}
     */
    projectPath(project) {
        return this._alertPolicyServiceClient.projectPath(project);
    }
}
module.exports = GCP_Monitoring;
