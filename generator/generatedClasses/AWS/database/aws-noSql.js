/*This is an auto generated class, please do not change.*/
/**
 * Class to create a DynamoDB object
 * @category AWS
 */
class AWS_NoSql {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._dynamoDB = new this._AWS.DynamoDB({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the createTable function of DynamoDB
     * @param {CreateTableInput} params - Data required for createTable
     * @returns {Promise<createTableResponse>}
     */
    createTable(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.createTable(params, (error, data) => {
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
     * Trigers the deleteItem function of DynamoDB
     * @param {DeleteItemInput} params - Data required for deleteItem
     * @returns {Promise<deleteItemResponse>}
     */
    deleteItem(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.deleteItem(params, (error, data) => {
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
     * Trigers the deleteTable function of DynamoDB
     * @param {DeleteTableInput} params - Data required for deleteTable
     * @returns {Promise<deleteTableResponse>}
     */
    deleteTable(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.deleteTable(params, (error, data) => {
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
     * Trigers the putItem function of DynamoDB
     * @param {PutItemInput} params - Data required for putItem
     * @returns {Promise<putItemResponse>}
     */
    createItem(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.putItem(params, (error, data) => {
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
     * Trigers the query function of DynamoDB
     * @param {QueryInput} params - Data required for query
     * @returns {Promise<queryResponse>}
     */
    query(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.query(params, (error, data) => {
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
     * Trigers the updateItem function of DynamoDB
     * @param {UpdateItemInput} params - Data required for updateItem
     * @returns {Promise<updateItemResponse>}
     */
    updateItem(params) {
        return new Promise((resolve, reject) => {
            this._dynamoDB.updateItem(params, (error, data) => {
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
module.exports = AWS_NoSql;
