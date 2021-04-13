"use strict";
exports.__esModule = true;
exports.filterAzureMethods = exports.groupAzureMethods = void 0;
function groupAzureMethods(methods) {
    var methodArr = Object.values(methods.reduce(function (result, _a) {
        var functionName = _a.functionName, SDKFunctionName = _a.SDKFunctionName, params = _a.params, pkgName = _a.pkgName, fileName = _a.fileName, client = _a.client, returnType = _a.returnType;
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
            params: params,
            pkgName: pkgName,
            fileName: fileName,
            client: client,
            returnType: returnType
        });
        return result;
    }, {}));
    return methodArr;
}
exports.groupAzureMethods = groupAzureMethods;
function filterAzureMethods(groupedMethods) {
    var methods = [];
    groupedMethods.map(function (group) {
        if (group.array.length === 1) {
            methods.push(group.array[0]);
        }
        else {
            var methodPushed_1 = false;
            group.array.map(function (method) {
                if (!method.params.find(function (param) { return param.name === "callback"; })) {
                    methods.push(method);
                    methodPushed_1 = true;
                }
            });
            if (!methodPushed_1) {
                methods.push(group.array[0]);
            }
        }
    });
    return methods;
}
exports.filterAzureMethods = filterAzureMethods;
