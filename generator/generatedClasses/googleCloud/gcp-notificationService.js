const { PublisherClient } = require("@google-cloud/pubsub");
const { SubscriberClient } = require("@google-cloud/pubsub");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a NotificationService object
 * @category Google Cloud
 */
class GCP_NotificationService {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._publisherClient = new PublisherClient(config);
        this._subscriberClient = new SubscriberClient(config);
    }
    /**
     * Trigers the createTopic function of undefined
     * @param {TypeReference} request - Data required for createTopic
     * @param {TypeReference} [options] - Data required for createTopic
     * @returns {Promise<createTopicResponse>}
     */
    createTopic(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.createTopic(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteTopic function of undefined
     * @param {TypeReference} request - Data required for deleteTopic
     * @param {TypeReference} [options] - Data required for deleteTopic
     * @returns {Promise<deleteTopicResponse>}
     */
    deleteTopic(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.deleteTopic(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getTopic function of undefined
     * @param {TypeReference} request - Data required for getTopic
     * @param {TypeReference} [options] - Data required for getTopic
     * @returns {Promise<getTopicResponse>}
     */
    getTopicAttributes(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.getTopic(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listTopicSubscriptions function of undefined
     * @param {TypeReference} request - Data required for listTopicSubscriptions
     * @param {TypeReference} [options] - Data required for listTopicSubscriptions
     * @returns {Promise<listTopicSubscriptionsResponse>}
     */
    listSubscriptions(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.listTopicSubscriptions(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createSubscription function of undefined
     * @param {TypeReference} request - Data required for createSubscription
     * @param {TypeReference} [options] - Data required for createSubscription
     * @returns {Promise<createSubscriptionResponse>}
     */
    subscribe(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._subscriberClient.createSubscription(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the publish function of undefined
     * @param {TypeReference} request - Data required for publish
     * @param {TypeReference} [options] - Data required for publish
     * @returns {Promise<publishResponse>}
     */
    publish(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.publish(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the listTopics function of undefined
     * @param {TypeReference} request - Data required for listTopics
     * @param {TypeReference} [options] - Data required for listTopics
     * @returns {Promise<listTopicsResponse>}
     */
    listTopics(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._publisherClient.listTopics(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteSubscription function of undefined
     * @param {TypeReference} request - Data required for deleteSubscription
     * @param {TypeReference} [options] - Data required for deleteSubscription
     * @returns {Promise<deleteSubscriptionResponse>}
     */
    unsubscribe(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._subscriberClient.deleteSubscription(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = GCP_NotificationService;
