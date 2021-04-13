/*This is an auto generated class, please do not change.*/
/**
 * Class to create a SNS object
 * @category AWS
 */
class AWS_NotificationService {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._sNS = new this._AWS.SNS({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createTopic function of SNS
     * @param {CreateTopicInput} params - Data required for createTopic
     * @returns {Promise<createTopicResponse>}
     */
    createTopic(params) {
        return new Promise((resolve, reject) => {
            this._sNS.createTopic(params, (error, data) => {
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
     * Trigers the deleteTopic function of SNS
     * @param {DeleteTopicInput} params - Data required for deleteTopic
     * @returns {Promise<deleteTopicResponse>}
     */
    deleteTopic(params) {
        return new Promise((resolve, reject) => {
            this._sNS.deleteTopic(params, (error, data) => {
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
     * Trigers the getTopicAttributes function of SNS
     * @param {GetTopicAttributesInput} params - Data required for getTopicAttributes
     * @returns {Promise<getTopicAttributesResponse>}
     */
    getTopicAttributes(params) {
        return new Promise((resolve, reject) => {
            this._sNS.getTopicAttributes(params, (error, data) => {
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
     * Trigers the listSubscriptions function of SNS
     * @param {ListSubscriptionsInput} params - Data required for listSubscriptions
     * @returns {Promise<listSubscriptionsResponse>}
     */
    listSubscriptions(params) {
        return new Promise((resolve, reject) => {
            this._sNS.listSubscriptions(params, (error, data) => {
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
     * Trigers the listTopics function of SNS
     * @param {ListTopicsInput} params - Data required for listTopics
     * @returns {Promise<listTopicsResponse>}
     */
    listTopics(params) {
        return new Promise((resolve, reject) => {
            this._sNS.listTopics(params, (error, data) => {
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
     * Trigers the publish function of SNS
     * @param {PublishInput} params - Data required for publish
     * @returns {Promise<publishResponse>}
     */
    publish(params) {
        return new Promise((resolve, reject) => {
            this._sNS.publish(params, (error, data) => {
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
     * Trigers the subscribe function of SNS
     * @param {SubscribeInput} params - Data required for subscribe
     * @returns {Promise<subscribeResponse>}
     */
    subscribe(params) {
        return new Promise((resolve, reject) => {
            this._sNS.subscribe(params, (error, data) => {
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
     * Trigers the unsubscribe function of SNS
     * @param {UnsubscribeInput} params - Data required for unsubscribe
     * @returns {Promise<unsubscribeResponse>}
     */
    unsubscribe(params) {
        return new Promise((resolve, reject) => {
            this._sNS.unsubscribe(params, (error, data) => {
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
module.exports = AWS_NotificationService;
