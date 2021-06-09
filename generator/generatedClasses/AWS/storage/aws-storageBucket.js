/*This is an auto generated class, please do not change.*/
/**
 * Class to create a S3 object
 * @category AWS
 */
class AWS_StorageBucket {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._s3 = new this._AWS.S3({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createBucket function of S3
     * @param {CreateBucketRequest} params - Data required for createBucket
     * @returns {Promise<createBucketResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._s3.createBucket(params, (error, data) => {
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
     * Trigers the deleteBucket function of S3
     * @param {DeleteBucketRequest} params - Data required for deleteBucket
     * @returns {Promise<deleteBucketResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._s3.deleteBucket(params, (error, data) => {
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
     * Trigers the deleteObjects function of S3
     * @param {DeleteObjectsRequest} params - Data required for deleteObjects
     * @returns {Promise<deleteObjectsResponse>}
     */
    deleteFiles(params) {
        return new Promise((resolve, reject) => {
            this._s3.deleteObjects(params, (error, data) => {
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
     * Trigers the listBuckets function of S3
     * @returns {Promise<listBucketsResponse>}
     */
    list() {
        return new Promise((resolve, reject) => {
            this._s3.listBuckets((error, data) => {
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
     * Trigers the uploadPart function of S3
     * @param {UploadPartRequest} params - Data required for uploadPart
     * @returns {Promise<uploadPartResponse>}
     */
    upload(params) {
        return new Promise((resolve, reject) => {
            this._s3.uploadPart(params, (error, data) => {
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
module.exports = AWS_StorageBucket;
