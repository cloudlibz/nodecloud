"use strict";
exports.__esModule = true;
exports.filterAWSMethods = exports.groupAWSMethods = void 0;
function groupAWSMethods(methods) {
    var methodArr = Object.values(methods.reduce(function (result, _a) {
        var functionName = _a.functionName, SDKFunctionName = _a.SDKFunctionName, params = _a.params;
        // Create new group
        if (!result[functionName])
            result[functionName] = {
                functionName: functionName,
                array: []
            };
        // Append to group
        result[functionName].array.push({
            functionName: functionName,
            SDKFunctionName: SDKFunctionName,
            params: params
        });
        return result;
    }, {}));
    return methodArr;
}
exports.groupAWSMethods = groupAWSMethods;
function filterAWSMethods(groupedMethods) {
    var methods = [];
    groupedMethods.map(function (group) {
        group.array.sort(function (a, b) {
            return a.params.length - b.params.length;
        });
        methods.push(group.array.slice(-1)[0]);
    });
    return methods;
}
exports.filterAWSMethods = filterAWSMethods;
