/*This is an auto generated class, please do not change.*/
/**
 * Class to create a IAM object
 * @category AWS
 */
class AWS_IAM {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._iAM = new this._AWS.IAM({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the attachGroupPolicy function of IAM
     * @param {AttachGroupPolicyRequest} params - Data required for attachGroupPolicy
     * @returns {Promise<attachGroupPolicyResponse>}
     */
    attachGroupPolicy(params) {
        return new Promise((resolve, reject) => {
            this._iAM.attachGroupPolicy(params, (error, data) => {
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
     * Trigers the createGroup function of IAM
     * @param {CreateGroupRequest} params - Data required for createGroup
     * @returns {Promise<createGroupResponse>}
     */
    createGroup(params) {
        return new Promise((resolve, reject) => {
            this._iAM.createGroup(params, (error, data) => {
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
     * Trigers the deleteGroup function of IAM
     * @param {DeleteGroupRequest} params - Data required for deleteGroup
     * @returns {Promise<deleteGroupResponse>}
     */
    deleteGroup(params) {
        return new Promise((resolve, reject) => {
            this._iAM.deleteGroup(params, (error, data) => {
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
     * Trigers the detachGroupPolicy function of IAM
     * @param {DetachGroupPolicyRequest} params - Data required for detachGroupPolicy
     * @returns {Promise<detachGroupPolicyResponse>}
     */
    detachGroupPolicy(params) {
        return new Promise((resolve, reject) => {
            this._iAM.detachGroupPolicy(params, (error, data) => {
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
     * Trigers the getGroup function of IAM
     * @param {GetGroupRequest} params - Data required for getGroup
     * @returns {Promise<getGroupResponse>}
     */
    describe(params) {
        return new Promise((resolve, reject) => {
            this._iAM.getGroup(params, (error, data) => {
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
module.exports = AWS_IAM;
