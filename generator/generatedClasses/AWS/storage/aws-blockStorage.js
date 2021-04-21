/*This is an auto generated class, please do not change.*/
/**
 * Class to create a EC2 object
 * @category AWS
 */
class AWS_BlockStorage {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._eC2 = new this._AWS.EC2({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createVolume function of EC2
     * @param {CreateVolumeRequest} params - Data required for createVolume
     * @returns {Promise<createVolumeResponse>}
     */
    create(params) {
        return new Promise((resolve, reject) => {
            this._eC2.createVolume(params, (error, data) => {
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
     * Trigers the deleteVolume function of EC2
     * @param {DeleteVolumeRequest} params - Data required for deleteVolume
     * @returns {Promise<deleteVolumeResponse>}
     */
    delete(params) {
        return new Promise((resolve, reject) => {
            this._eC2.deleteVolume(params, (error, data) => {
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
     * Trigers the describeVolumeAttribute function of EC2
     * @param {DescribeVolumeAttributeRequest} params - Data required for describeVolumeAttribute
     * @returns {Promise<describeVolumeAttributeResponse>}
     */
    describe(params) {
        return new Promise((resolve, reject) => {
            this._eC2.describeVolumeAttribute(params, (error, data) => {
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
     * Trigers the describeVolumes function of EC2
     * @param {DescribeVolumesRequest} params - Data required for describeVolumes
     * @returns {Promise<describeVolumesResponse>}
     */
    list(params) {
        return new Promise((resolve, reject) => {
            this._eC2.describeVolumes(params, (error, data) => {
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
module.exports = AWS_BlockStorage;
