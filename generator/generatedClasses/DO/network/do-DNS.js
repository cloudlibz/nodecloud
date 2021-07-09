/*This is an auto generated class, please do not change.*/
/**
* Class to create a Domains object
* @category Digital Ocean
*/
class DO_DNS {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._domains = this._instance.domains;
    }
    /**
    * Trigers the getAllRecords function of Domains
    * @param {StringKeyword} domainName - Data required for getAllRecords
    * @param {StringKeyword} tagName - Data required for getAllRecords
    * @param {BooleanKeyword} includeAll - Data required for getAllRecords
    * @param {NumberKeyword} page - Data required for getAllRecords
    * @param {NumberKeyword} pageSize - Data required for getAllRecords
    * @returns {Promise<getAllRecordsResponse>}
    */
    getRecords(domainName, tagName, includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._domains.getAllRecords(domainName, tagName, includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the createRecord function of Domains
    * @param {StringKeyword} domainName - Data required for createRecord
    * @param {DomainRecordRequestOptions} options - Data required for createRecord
    * @returns {Promise<createRecordResponse>}
    */
    createRecord(domainName, options) {
        return new Promise((resolve, reject) => {
            this._domains.createRecord(domainName, options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getRecord function of Domains
    * @param {StringKeyword} domainName - Data required for getRecord
    * @param {StringKeyword} recordId - Data required for getRecord
    * @returns {Promise<getRecordResponse>}
    */
    getRecord(domainName, recordId) {
        return new Promise((resolve, reject) => {
            this._domains.getRecord(domainName, recordId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the deleteRecord function of Domains
    * @param {StringKeyword} domainName - Data required for deleteRecord
    * @param {StringKeyword} recordId - Data required for deleteRecord
    * @returns {Promise<deleteRecordResponse>}
    */
    deleteRecord(domainName, recordId) {
        return new Promise((resolve, reject) => {
            this._domains.deleteRecord(domainName, recordId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the updateRecord function of Domains
    * @param {StringKeyword} domainName - Data required for updateRecord
    * @param {StringKeyword} recordId - Data required for updateRecord
    * @param {DomainRecordRequestOptions} options - Data required for updateRecord
    * @returns {Promise<updateRecordResponse>}
    */
    changeRecordSets(domainName, recordId, options) {
        return new Promise((resolve, reject) => {
            this._domains.updateRecord(domainName, recordId, options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_DNS;
