const { FirestoreClient } = require("@google-cloud/firestore");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a NoSql object
 * @category Google Cloud
 */
class GCP_NoSql {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._firestoreClient = new FirestoreClient(config);
    }
    /**
     * Trigers the createDocument function of undefined
     * @param {TypeReference} request - Data required for createDocument
     * @param {TypeReference} [options] - Data required for createDocument
     * @returns {Promise<createDocumentResponse>}
     */
    createItem(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._firestoreClient.createDocument(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the deleteDocument function of undefined
     * @param {TypeReference} request - Data required for deleteDocument
     * @param {TypeReference} [options] - Data required for deleteDocument
     * @returns {Promise<deleteDocumentResponse>}
     */
    deleteItem(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._firestoreClient.deleteDocument(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateDocument function of undefined
     * @param {TypeReference} request - Data required for updateDocument
     * @param {TypeReference} [options] - Data required for updateDocument
     * @returns {Promise<updateDocumentResponse>}
     */
    updateItem(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._firestoreClient.updateDocument(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the runQuery function of undefined
     * @param {TypeReference} [request] - Data required for runQuery
     * @param {TypeReference} [options] - Data required for runQuery
     * @returns {Promise<runQueryResponse>}
     */
    query(request = undefined, options = undefined) {
        return this._firestoreClient.runQuery(request, options);
    }
}
module.exports = GCP_NoSql;
