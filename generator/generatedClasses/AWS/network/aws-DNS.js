/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Route53 object
 * @category AWS
 */
class AWS_DNS {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._route53 = new this._AWS.Route53({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the changeResourceRecordSets function of Route53
     * @param {ChangeResourceRecordSetsRequest} params - Data required for changeResourceRecordSets
     * @returns {Promise<changeResourceRecordSetsResponse>}
     */
    changeRecordSets(params) {
        return new Promise((resolve, reject) => {
            this._route53.changeResourceRecordSets(params, (error, data) => {
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
     * Trigers the createHostedZone function of Route53
     * @param {CreateHostedZoneRequest} params - Data required for createHostedZone
     * @returns {Promise<createHostedZoneResponse>}
     */
    createZone(params) {
        return new Promise((resolve, reject) => {
            this._route53.createHostedZone(params, (error, data) => {
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
     * Trigers the deleteHostedZone function of Route53
     * @param {DeleteHostedZoneRequest} params - Data required for deleteHostedZone
     * @returns {Promise<deleteHostedZoneResponse>}
     */
    deleteZone(params) {
        return new Promise((resolve, reject) => {
            this._route53.deleteHostedZone(params, (error, data) => {
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
     * Trigers the listHostedZones function of Route53
     * @param {ListHostedZonesRequest} params - Data required for listHostedZones
     * @returns {Promise<listHostedZonesResponse>}
     */
    listZones(params) {
        return new Promise((resolve, reject) => {
            this._route53.listHostedZones(params, (error, data) => {
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
module.exports = AWS_DNS;
