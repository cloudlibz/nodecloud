/*This is an auto generated class, please do not change.*/
/**
 * Class to create a CloudWatch object
 * @category AWS
 */
class AWS_Monitoring {
    /**
     *
     * @param {module} aws AWS SDK
     * @param {object} options SDK options
     */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._cloudWatch = new this._AWS.CloudWatch({
            apiVersion: this._apiVersion
        });
    }
    /**
     * Trigers the deleteAlarms function of CloudWatch
     * @param {DeleteAlarmsInput} params - Data required for deleteAlarms
     * @returns {Promise<deleteAlarmsResponse>}
     */
    deleteAlarm(params) {
        return new Promise((resolve, reject) => {
            this._cloudWatch.deleteAlarms(params, (error, data) => {
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
     * Trigers the getMetricData function of CloudWatch
     * @param {GetMetricDataInput} params - Data required for getMetricData
     * @returns {Promise<getMetricDataResponse>}
     */
    getMetricData(params) {
        return new Promise((resolve, reject) => {
            this._cloudWatch.getMetricData(params, (error, data) => {
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
     * Trigers the listMetrics function of CloudWatch
     * @param {ListMetricsInput} params - Data required for listMetrics
     * @returns {Promise<listMetricsResponse>}
     */
    listAlarms(params) {
        return new Promise((resolve, reject) => {
            this._cloudWatch.listMetrics(params, (error, data) => {
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
     * Trigers the putMetricAlarm function of CloudWatch
     * @param {PutMetricAlarmInput} params - Data required for putMetricAlarm
     * @returns {Promise<putMetricAlarmResponse>}
     */
    updateAlarm(params) {
        return new Promise((resolve, reject) => {
            this._cloudWatch.putMetricAlarm(params, (error, data) => {
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
module.exports = AWS_Monitoring;
