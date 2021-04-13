const { Storage } = require("@google-cloud/storage");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a storage object
 * @category Google Cloud
 */
class GCP_storage {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._storage = new Storage(config);
    }
    /**
     * Trigers the deleteFiles function of storage
     * @param {string} [identifier] - Optional parameter
     * @param {Storage} storage - Mandatory parameter
     * @param {TypeReference} [query] - Optional parameter
     * @returns {Promise<deleteFilesResponse>}
     */
    deleteFiles(storage, query = undefined, identifier = undefined) {
        return new Promise((resolve, reject) => {
            storage.bucket(identifier).deleteFiles(query)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the upload function of storage
     * @param {string} [identifier] - Optional parameter
     * @param {Storage} storage - Mandatory parameter
     * @param {StringKeyword} pathString - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<uploadResponse>}
     */
    upload(storage, pathString, options = undefined, identifier = undefined) {
        return new Promise((resolve, reject) => {
            storage.bucket(identifier).upload(pathString, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the makePublic function of storage
     * @param {string} [identifier] - Optional parameter
     * @param {Bucket} bucket - Mandatory parameter
     * @returns {Promise<makePublicResponse>}
     */
    makePublic(bucket, identifier = undefined) {
        return new Promise((resolve, reject) => {
            bucket.file(identifier).makePublic()
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createBucket function of storage
     * @param {StringKeyword} name - Mandatory parameter
     * @param {TypeReference} [metadata] - Optional parameter
     * @returns {Promise<createBucketResponse>}
     */
    create(name, metadata = undefined) {
        return new Promise((resolve, reject) => {
            this._storage.createBucket(name, metadata)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getBuckets function of storage
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<getBucketsResponse>}
     */
    list(options = undefined) {
        return new Promise((resolve, reject) => {
            this._storage.getBuckets(options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = GCP_storage;
