/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Glacier object
 * @category AWS
 */
class AWS_ArchivalStorage {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._glacier = new this._AWS.Glacier({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createVault function of Glacier
     * @param {CreateVaultInput} params - Data required for createVault
     * @returns {Promise<createVaultResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._glacier.createVault(params, (error, data) => {
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
     * Trigers the deleteArchive function of Glacier
     * @param {DeleteArchiveInput} params - Data required for deleteArchive
     * @returns {Promise<deleteArchiveResponse>}
     */
    deleteFiles(params) {
        return new Promise((resolve, reject) => {
            this._glacier.deleteArchive(params, (error, data) => {
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
     * Trigers the deleteVault function of Glacier
     * @param {DeleteVaultInput} params - Data required for deleteVault
     * @returns {Promise<deleteVaultResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._glacier.deleteVault(params, (error, data) => {
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
     * Trigers the initiateMultipartUpload function of Glacier
     * @param {InitiateMultipartUploadInput} params - Data required for initiateMultipartUpload
     * @returns {Promise<initiateMultipartUploadResponse>}
     */
    upload(params) {
        return new Promise((resolve, reject) => {
            this._glacier.initiateMultipartUpload(params, (error, data) => {
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
     * Trigers the listParts function of Glacier
     * @param {ListPartsInput} params - Data required for listParts
     * @returns {Promise<listPartsResponse>}
     */
    list(params) {
        return new Promise((resolve, reject) => {
            this._glacier.listParts(params, (error, data) => {
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
module.exports = AWS_ArchivalStorage;
