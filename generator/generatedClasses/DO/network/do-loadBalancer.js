/*This is an auto generated class, please do not change.*/
/**
* Class to create a LoadBalancers object
* @category Digital Ocean
*/
class DO_LoadBalancer {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
        this._DO = dosdk;
        this._instance = new this._DO(dotoken);
        this._loadBalancers = this._instance.loadBalancers;
    }
    /**
    * Trigers the create function of LoadBalancers
    * @param {LoadBalancerCreationOptions} options - Data required for create
    * @returns {Promise<createResponse>}
    */
    create(options) {
        return new Promise((resolve, reject) => {
            this._loadBalancers.create(options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the getAll function of LoadBalancers
    * @returns {Promise<getAllResponse>}
    */
    list() {
        return new Promise((resolve, reject) => {
            this._loadBalancers.getAll()
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the update function of LoadBalancers
    * @param {StringKeyword} loadBalancerId - Data required for update
    * @param {AnyKeyword} options - Data required for update
    * @returns {Promise<updateResponse>}
    */
    update(loadBalancerId, options) {
        return new Promise((resolve, reject) => {
            this._loadBalancers.update(loadBalancerId, options)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    /**
    * Trigers the delete function of LoadBalancers
    * @param {StringKeyword} loadBalancerId - Data required for delete
    * @returns {Promise<deleteResponse>}
    */
    delete(loadBalancerId) {
        return new Promise((resolve, reject) => {
            this._loadBalancers.delete(loadBalancerId)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
module.exports = DO_LoadBalancer;
