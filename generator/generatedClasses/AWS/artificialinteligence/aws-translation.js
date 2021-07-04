/*This is an auto generated class, please do not change.*/
/**
 * Class to create a Translate object
 * @category AWS
 */
class AWS_Translation {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._translate = new this._AWS.Translate({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the deleteTerminology function of Translate
     * @param {DeleteTerminologyRequest} params - Data required for deleteTerminology
     * @returns {Promise<deleteTerminologyResponse>}
     */
    deleteGlossary(params) {
        return new Promise((resolve, reject) => {
            this._translate.deleteTerminology(params, (error, data) => {
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
     * Trigers the getTerminology function of Translate
     * @param {GetTerminologyRequest} params - Data required for getTerminology
     * @returns {Promise<getTerminologyResponse>}
     */
    getGlossary(params) {
        return new Promise((resolve, reject) => {
            this._translate.getTerminology(params, (error, data) => {
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
     * Trigers the importTerminology function of Translate
     * @param {ImportTerminologyRequest} params - Data required for importTerminology
     * @returns {Promise<importTerminologyResponse>}
     */
    createGlossary(params) {
        return new Promise((resolve, reject) => {
            this._translate.importTerminology(params, (error, data) => {
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
     * Trigers the startTextTranslationJob function of Translate
     * @param {StartTextTranslationJobRequest} params - Data required for startTextTranslationJob
     * @returns {Promise<startTextTranslationJobResponse>}
     */
    batchTranslate(params) {
        return new Promise((resolve, reject) => {
            this._translate.startTextTranslationJob(params, (error, data) => {
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
     * Trigers the translateText function of Translate
     * @param {TranslateTextRequest} params - Data required for translateText
     * @returns {Promise<translateTextResponse>}
     */
    translate(params) {
        return new Promise((resolve, reject) => {
            this._translate.translateText(params, (error, data) => {
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
module.exports = AWS_Translation;
