/*This is an auto generated class, please do not change.*/
/**
 * Class to create a ElasticBeanstalk object
 * @category AWS
 */
class AWS_PaaS {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._elasticBeanstalk = new this._AWS.ElasticBeanstalk({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the checkDNSAvailability function of ElasticBeanstalk
     * @param {CheckDNSAvailabilityMessage} params - Data required for checkDNSAvailability
     * @returns {Promise<checkDNSAvailabilityResponse>}
     */
    checkDNSAvailability(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.checkDNSAvailability(params, (error, data) => {
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
     * Trigers the composeEnvironments function of ElasticBeanstalk
     * @param {ComposeEnvironmentsMessage} params - Data required for composeEnvironments
     * @returns {Promise<composeEnvironmentsResponse>}
     */
    composeEnvironments(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.composeEnvironments(params, (error, data) => {
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
     * Trigers the createApplication function of ElasticBeanstalk
     * @param {CreateApplicationMessage} params - Data required for createApplication
     * @returns {Promise<createApplicationResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.createApplication(params, (error, data) => {
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
     * Trigers the createConfigurationTemplate function of ElasticBeanstalk
     * @param {CreateConfigurationTemplateMessage} params - Data required for createConfigurationTemplate
     * @returns {Promise<createConfigurationTemplateResponse>}
     */
    createConfigTemplate(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.createConfigurationTemplate(params, (error, data) => {
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
     * Trigers the createEnvironment function of ElasticBeanstalk
     * @param {CreateEnvironmentMessage} params - Data required for createEnvironment
     * @returns {Promise<createEnvironmentResponse>}
     */
    createEnvironment(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.createEnvironment(params, (error, data) => {
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
     * Trigers the createStorageLocation function of ElasticBeanstalk
     * @returns {Promise<createStorageLocationResponse>}
     */
    createStorageLocation() {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.createStorageLocation((error, data) => {
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
     * Trigers the deleteApplication function of ElasticBeanstalk
     * @param {DeleteApplicationMessage} params - Data required for deleteApplication
     * @returns {Promise<deleteApplicationResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.deleteApplication(params, (error, data) => {
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
     * Trigers the deleteConfigurationTemplate function of ElasticBeanstalk
     * @param {DeleteConfigurationTemplateMessage} params - Data required for deleteConfigurationTemplate
     * @returns {Promise<deleteConfigurationTemplateResponse>}
     */
    deleteConfigTemplate(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.deleteConfigurationTemplate(params, (error, data) => {
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
     * Trigers the describeAccountAttributes function of ElasticBeanstalk
     * @returns {Promise<describeAccountAttributesResponse>}
     */
    describeAccountAttributes() {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.describeAccountAttributes((error, data) => {
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
     * Trigers the describeApplications function of ElasticBeanstalk
     * @param {DescribeApplicationsMessage} params - Data required for describeApplications
     * @returns {Promise<describeApplicationsResponse>}
     */
    describe(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.describeApplications(params, (error, data) => {
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
     * Trigers the describeConfigurationSettings function of ElasticBeanstalk
     * @param {DescribeConfigurationSettingsMessage} params - Data required for describeConfigurationSettings
     * @returns {Promise<describeConfigurationSettingsResponse>}
     */
    describeConfigSettings(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.describeConfigurationSettings(params, (error, data) => {
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
     * Trigers the listPlatformVersions function of ElasticBeanstalk
     * @param {ListPlatformVersionsRequest} params - Data required for listPlatformVersions
     * @returns {Promise<listPlatformVersionsResponse>}
     */
    listVersions(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.listPlatformVersions(params, (error, data) => {
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
     * Trigers the restartAppServer function of ElasticBeanstalk
     * @param {RestartAppServerMessage} params - Data required for restartAppServer
     * @returns {Promise<restartAppServerResponse>}
     */
    restart(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.restartAppServer(params, (error, data) => {
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
     * Trigers the terminateEnvironment function of ElasticBeanstalk
     * @param {TerminateEnvironmentMessage} params - Data required for terminateEnvironment
     * @returns {Promise<terminateEnvironmentResponse>}
     */
    terminateEnvironment(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.terminateEnvironment(params, (error, data) => {
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
     * Trigers the updateApplication function of ElasticBeanstalk
     * @param {UpdateApplicationMessage} params - Data required for updateApplication
     * @returns {Promise<updateApplicationResponse>}
     */
    update(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.updateApplication(params, (error, data) => {
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
     * Trigers the updateEnvironment function of ElasticBeanstalk
     * @param {UpdateEnvironmentMessage} params - Data required for updateEnvironment
     * @returns {Promise<updateEnvironmentResponse>}
     */
    updateEnvironment(params) {
        return new Promise((resolve, reject) => {
            this._elasticBeanstalk.updateEnvironment(params, (error, data) => {
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
module.exports = AWS_PaaS;
