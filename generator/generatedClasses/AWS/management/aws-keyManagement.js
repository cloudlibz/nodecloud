/*This is an auto generated class, please do not change.*/
/**
 * Class to create a KMS object
 * @category AWS
 */
class AWS_KeyManagement {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._kMS = new this._AWS.KMS({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createKey function of KMS
     * @param {CreateKeyRequest} params - Data required for createKey
     * @returns {Promise<createKeyResponse>}
     */
    createKey(params) {
        return new Promise((resolve, reject) => {
            this._kMS.createKey(params, (error, data) => {
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
     * Trigers the deleteCustomKeyStore function of KMS
     * @param {DeleteCustomKeyStoreRequest} params - Data required for deleteCustomKeyStore
     * @returns {Promise<deleteCustomKeyStoreResponse>}
     */
    deleteKey(params) {
        return new Promise((resolve, reject) => {
            this._kMS.deleteCustomKeyStore(params, (error, data) => {
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
     * Trigers the describeKey function of KMS
     * @param {DescribeKeyRequest} params - Data required for describeKey
     * @returns {Promise<describeKeyResponse>}
     */
    describeKey(params) {
        return new Promise((resolve, reject) => {
            this._kMS.describeKey(params, (error, data) => {
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
     * Trigers the putKeyPolicy function of KMS
     * @param {PutKeyPolicyRequest} params - Data required for putKeyPolicy
     * @returns {Promise<putKeyPolicyResponse>}
     */
    putKeyPolicy(params) {
        return new Promise((resolve, reject) => {
            this._kMS.putKeyPolicy(params, (error, data) => {
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
     * Trigers the updateKeyDescription function of KMS
     * @param {UpdateKeyDescriptionRequest} params - Data required for updateKeyDescription
     * @returns {Promise<updateKeyDescriptionResponse>}
     */
    update(params) {
        return new Promise((resolve, reject) => {
            this._kMS.updateKeyDescription(params, (error, data) => {
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
module.exports = AWS_KeyManagement;
