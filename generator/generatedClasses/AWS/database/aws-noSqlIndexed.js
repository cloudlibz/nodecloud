/*This is an auto generated class, please do not change.*/
/**
 * Class to create a SimpleDB object
 * @category AWS
 */
class AWS_NoSqlIndexed {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._simpleDB = new this._AWS.SimpleDB({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the batchDeleteAttributes function of SimpleDB
     * @param {BatchDeleteAttributesRequest} params - Data required for batchDeleteAttributes
     * @returns {Promise<batchDeleteAttributesResponse>}
     */
    batchDelete(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.batchDeleteAttributes(params, (error, data) => {
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
     * Trigers the batchPutAttributes function of SimpleDB
     * @param {BatchPutAttributesRequest} params - Data required for batchPutAttributes
     * @returns {Promise<batchPutAttributesResponse>}
     */
    batchWrite(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.batchPutAttributes(params, (error, data) => {
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
     * Trigers the createDomain function of SimpleDB
     * @param {CreateDomainRequest} params - Data required for createDomain
     * @returns {Promise<createDomainResponse>}
     */
    createCollection(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.createDomain(params, (error, data) => {
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
     * Trigers the deleteAttributes function of SimpleDB
     * @param {DeleteAttributesRequest} params - Data required for deleteAttributes
     * @returns {Promise<deleteAttributesResponse>}
     */
    deleteAttribute(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.deleteAttributes(params, (error, data) => {
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
     * Trigers the deleteDomain function of SimpleDB
     * @param {DeleteDomainRequest} params - Data required for deleteDomain
     * @returns {Promise<deleteDomainResponse>}
     */
    deleteCollection(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.deleteDomain(params, (error, data) => {
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
     * Trigers the getAttributes function of SimpleDB
     * @param {GetAttributesRequest} params - Data required for getAttributes
     * @returns {Promise<getAttributesResponse>}
     */
    getAttributes(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.getAttributes(params, (error, data) => {
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
     * Trigers the listDomains function of SimpleDB
     * @param {ListDomainsRequest} params - Data required for listDomains
     * @returns {Promise<listDomainsResponse>}
     */
    listCollections(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.listDomains(params, (error, data) => {
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
     * Trigers the putAttributes function of SimpleDB
     * @param {PutAttributesRequest} params - Data required for putAttributes
     * @returns {Promise<putAttributesResponse>}
     */
    setAttribute(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.putAttributes(params, (error, data) => {
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
     * Trigers the select function of SimpleDB
     * @param {SelectRequest} params - Data required for select
     * @returns {Promise<selectResponse>}
     */
    query(params) {
        return new Promise((resolve, reject) => {
            this._simpleDB.select(params, (error, data) => {
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
module.exports = AWS_NoSqlIndexed;
