const { TranslationServiceClient } = require("@google-cloud/translate");
/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Translation object
 * @category Google Cloud
 */
class GCP_Translation {
    /**
     *
     * @param {object} config Configuration object
     */
    constructor(config) {
        this._translationServiceClient = new TranslationServiceClient(config);
    }
    /**
     * Trigers the translateText function of undefined
     * @param {TypeReference} request - Data required for translateText
     * @param {TypeReference} [options] - Data required for translateText
     * @returns {Promise<translateTextResponse>}
     */
    translate(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._translationServiceClient.translateText(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the batchTranslateText function of undefined
     * @param {TypeReference} request - Data required for batchTranslateText
     * @param {TypeReference} [options] - Data required for batchTranslateText
     * @returns {Promise<batchTranslateTextResponse>}
     */
    batchTranslate(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._translationServiceClient.batchTranslateText(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the getGlossary function of undefined
     * @param {TypeReference} request - Data required for getGlossary
     * @param {TypeReference} [options] - Data required for getGlossary
     * @returns {Promise<getGlossaryResponse>}
     */
    getGlossary(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._translationServiceClient.getGlossary(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the createGlossary function of undefined
     * @param {TypeReference} request - Data required for createGlossary
     * @param {TypeReference} [options] - Data required for createGlossary
     * @returns {Promise<createGlossaryResponse>}
     */
    createGlossary(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._translationServiceClient.createGlossary(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * Trigers the detectLanguage function of undefined
     * @param {TypeReference} request - Data required for detectLanguage
     * @param {TypeReference} [options] - Data required for detectLanguage
     * @returns {Promise<detectLanguageResponse>}
     */
    detectLanguage(request, options = undefined) {
        return new Promise((resolve, reject) => {
            this._translationServiceClient.detectLanguage(request, options)
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = GCP_Translation;
