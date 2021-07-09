/*This is an auto generated class, please do not change.*/
/**
* Class to create a Volumes object
* @category Digital Ocean
*/
class DO_BlockStorage {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._volumes = this._instance.volumes;
    }
    /**
    * Trigers the getAll function of Volumes
    * @param {StringKeyword} region - Data required for getAll
    * @returns {Promise<getAllResponse>}
    */
    list(region) {
        return new Promise((resolve, reject) => {
            this._volumes.getAll(region)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the create function of Volumes
    * @param {VolumeCreationOptions} options - Data required for create
    * @returns {Promise<createResponse>}
    */
    create(options) {
        return new Promise((resolve, reject) => {
            this._volumes.create(options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getById function of Volumes
    * @param {StringKeyword} volumeId - Data required for getById
    * @returns {Promise<getByIdResponse>}
    */
    describe(volumeId) {
        return new Promise((resolve, reject) => {
            this._volumes.getById(volumeId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the deleteById function of Volumes
    * @param {StringKeyword} volumeId - Data required for deleteById
    * @returns {Promise<deleteByIdResponse>}
    */
    delete(volumeId) {
        return new Promise((resolve, reject) => {
            this._volumes.deleteById(volumeId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_BlockStorage;
