/*This is an auto generated class, please do not change.*/
/**
* Class to create a Keys object
* @category Digital Ocean
*/
class DO_KeyManagement {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._keys = this._instance.keys;
    }
    /**
    * Trigers the getAll function of Keys
    * @param {StringKeyword} tagName - Data required for getAll
    * @param {BooleanKeyword} includeAll - Data required for getAll
    * @param {NumberKeyword} page - Data required for getAll
    * @param {NumberKeyword} pageSize - Data required for getAll
    * @returns {Promise<getAllResponse>}
    */
    list(tagName, includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._keys.getAll(tagName, includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getById function of Keys
    * @param {NumberKeyword} keyId - Data required for getById
    * @returns {Promise<getByIdResponse>}
    */
    describeKey(keyId) {
        return new Promise((resolve, reject) => {
            this._keys.getById(keyId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the add function of Keys
    * @param {AddKeyRequest} addKeyRequest - Data required for add
    * @returns {Promise<addResponse>}
    */
    createKey(addKeyRequest) {
        return new Promise((resolve, reject) => {
            this._keys.add(addKeyRequest)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the delete function of Keys
    * @param {StringKeyword} identifier - Data required for delete
    * @returns {Promise<deleteResponse>}
    */
    deleteKey(identifier) {
        return new Promise((resolve, reject) => {
            this._keys.delete(identifier)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_KeyManagement;
