/*This is an auto generated class, please do not change.*/
/**
* Class to create a Droplets object
* @category Digital Ocean
*/
class DO_ComputeInstance {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._droplets = this._instance.droplets;
    }
    /**
    * Trigers the getAll function of Droplets
    * @param {StringKeyword} tagName - Data required for getAll
    * @param {BooleanKeyword} includeAll - Data required for getAll
    * @param {NumberKeyword} page - Data required for getAll
    * @param {NumberKeyword} pageSize - Data required for getAll
    * @returns {Promise<getAllResponse>}
    */
    list(tagName, includeAll = undefined, page = undefined, pageSize = undefined) {
        return new Promise((resolve, reject) => {
            this._droplets.getAll(tagName, includeAll, page, pageSize)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the create function of Droplets
    * @param {DropletCreationRequest} options - Data required for create
    * @returns {Promise<createResponse>}
    */
    create(options) {
        return new Promise((resolve, reject) => {
            this._droplets.create(options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the deleteById function of Droplets
    * @param {StringKeyword} dropletId - Data required for deleteById
    * @returns {Promise<deleteByIdResponse>}
    */
    destroy(dropletId) {
        return new Promise((resolve, reject) => {
            this._droplets.deleteById(dropletId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the requestAction function of Droplets
    * @param {StringKeyword} dropletId - Data required for requestAction
    * @param {AnyKeyword} action - Data required for requestAction
    * @returns {Promise<requestActionResponse>}
    */
    stop(dropletId, action) {
        return new Promise((resolve, reject) => {
            this._droplets.requestAction(dropletId, action)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_ComputeInstance;
