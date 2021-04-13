const { KeyManagementServiceClient } = require("@google-cloud/kms");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a KeyManagement object
 * @category Google Cloud
 */
class GCP_KeyManagement {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._keyManagementServiceClient = new KeyManagementServiceClient(config);
    }
    /**
     * Trigers the createCryptoKey function of undefined
     * @param {TypeReference} request - Data required for createCryptoKey
     * @param {TypeReference} [options] - Data required for createCryptoKey
     * @returns {Promise<createCryptoKeyResponse>}
     */
    createKey(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._keyManagementServiceClient.createCryptoKey(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the destroyCryptoKeyVersion function of undefined
     * @param {TypeReference} request - Data required for destroyCryptoKeyVersion
     * @param {TypeReference} [options] - Data required for destroyCryptoKeyVersion
     * @returns {Promise<destroyCryptoKeyVersionResponse>}
     */
    deleteKey(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._keyManagementServiceClient.destroyCryptoKeyVersion(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the updateCryptoKey function of undefined
     * @param {TypeReference} request - Data required for updateCryptoKey
     * @param {TypeReference} [options] - Data required for updateCryptoKey
     * @returns {Promise<updateCryptoKeyResponse>}
     */
    update(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._keyManagementServiceClient.updateCryptoKey(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getCryptoKey function of undefined
     * @param {TypeReference} request - Data required for getCryptoKey
     * @param {TypeReference} [options] - Data required for getCryptoKey
     * @returns {Promise<getCryptoKeyResponse>}
     */
    describeKey(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._keyManagementServiceClient.getCryptoKey(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the setIamPolicy function of undefined
     * @param {TypeReference} request - Data required for setIamPolicy
     * @param {UnionType} [options] - Data required for setIamPolicy
     * @param {TypeReference} [callback] - Data required for setIamPolicy
     * @returns {Promise<setIamPolicyResponse>}
     */
    putKeyPolicy(request, options = undefined, callback = undefined) {
        return new Promise((resolve, reject) => {
            this._keyManagementServiceClient.setIamPolicy(request, options, callback)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = GCP_KeyManagement;
