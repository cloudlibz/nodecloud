"use strict";
exports.__esModule = true;
exports.filters = exports.groupers = exports.printFile = void 0;
var fs = require("fs");
var awsHelper_1 = require("../lib/aws/awsHelper");
var gcpHelper_1 = require("../lib/googleCloud/gcpHelper");
var azureHelper_1 = require("../lib/azure/azureHelper");
var doHelper_1 = require("../lib/do/doHelper");
var awsHelper_2 = require("../lib/aws/awsHelper");
var gcpHelper_2 = require("../lib/googleCloud/gcpHelper");
var azureHelper_2 = require("../lib/azure/azureHelper");
var doHelper_2 = require("../lib/do/doHelper");
function printFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err)
            throw err;
    });
}
exports.printFile = printFile;
var groupers = {
    aws: awsHelper_1.groupAWSMethods,
    gcp: gcpHelper_1.groupGCPMethods,
    azure: azureHelper_1.groupAzureMethods,
    "do": doHelper_1.groupDOMethods
};
exports.groupers = groupers;
var filters = {
    aws: awsHelper_2.filterAWSMethods,
    gcp: gcpHelper_2.filterGCPMethods,
    azure: azureHelper_2.filterAzureMethods,
    "do": doHelper_2.filterDOMethods
};
exports.filters = filters;
