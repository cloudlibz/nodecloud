const { DNS } = require("@google-cloud/dns");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a dns object
 * @category Google Cloud
 */
class GCP_dns {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._dns = new DNS(config);
    }
    /**
     * Trigers the getZones function of dns
     * @param {TypeReference} [query] - Optional parameter
     * @returns {Promise<getZonesResponse>}
     */
    listZones(query = undefined) {
        return new Promise((resolve, reject) => {
            this._dns.getZones(query)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the create function of dns
     * @param {string} [identifier] - Optional parameter
     * @param {DNS} dns - Mandatory parameter
     * @param {TypeReference} config - Mandatory parameter
     * @returns {Promise<createResponse>}
     */
    createZone(dns, config, identifier = undefined) {
        return new Promise((resolve, reject) => {
            dns.zone(identifier).create(config)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createChange function of dns
     * @param {string} [identifier] - Optional parameter
     * @param {DNS} dns - Mandatory parameter
     * @param {TypeReference} config - Mandatory parameter
     * @returns {Promise<createChangeResponse>}
     */
    changeRecordSets(dns, config, identifier = undefined) {
        return new Promise((resolve, reject) => {
            dns.zone(identifier).createChange(config)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the delete function of dns
     * @param {string} [identifier] - Optional parameter
     * @param {DNS} dns - Mandatory parameter
     * @param {TypeReference} [options] - Optional parameter
     * @returns {Promise<deleteResponse>}
     */
    deleteZone(dns, options = undefined, identifier = undefined) {
        return new Promise((resolve, reject) => {
            dns.zone(identifier).delete(options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the record function of dns
     * @param {string} [identifier] - Optional parameter
     * @param {DNS} dns - Mandatory parameter
     * @param {StringKeyword} type - Mandatory parameter
     * @param {TypeReference} metadata - Mandatory parameter
     * @returns {Promise<recordResponse>}
     */
    record(dns, type, metadata) {
        return this.dns.record(type, metadata);
    }
}
module.exports = GCP_dns;
