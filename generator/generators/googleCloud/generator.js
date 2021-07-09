"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.generateGCPClass = exports.extractClientBasedSDKdata = exports.extractClassBasedSDKData = void 0;
var fs = require("fs");
var path = require("path");
var typescript_1 = require("typescript");
var parser_1 = require("../../parsers/googleCloud/parser");
var helper_1 = require("../lib/helper");
var clientBasedTransformer_1 = require("../../transformers/googleCloud/clientBasedTransformer");
var classBasedTransformer_1 = require("../../transformers/googleCloud/classBasedTransformer");
var dummyFile = process.cwd() + "/dummyClasses/gcp.js";
var dummyAst = typescript_1.createSourceFile(dummyFile, fs.readFileSync(dummyFile).toString(), typescript_1.ScriptTarget.Latest, true);
function extractClassBasedSDKData(methods, sdkFiles) {
    var _this = this;
    var specifiedMethods = JSON.parse(JSON.stringify(methods));
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var classes_1, extractedData;
        return __generator(this, function (_a) {
            try {
                classes_1 = [];
                sdkFiles.map(function (file) {
                    file.classes.map(function (classAst) {
                        var classInfo = {
                            name: classAst.name.text,
                            methods: [],
                            properties: [],
                            constructor: null
                        };
                        classAst.members.map(function (member) {
                            if (typescript_1.SyntaxKind[member.kind] === "MethodDeclaration") {
                                var returnType = typescript_1.SyntaxKind[member.type.kind];
                                var parameters = member.parameters.map(function (param) {
                                    return {
                                        name: param.name.text,
                                        optional: param.questionToken ? true : false,
                                        type: typescript_1.SyntaxKind[param.type.kind]
                                    };
                                });
                                var method_1 = {
                                    pkgName: file.pkgName,
                                    version: null,
                                    fileName: file.fileName,
                                    functionName: null,
                                    SDKFunctionName: member.name.text,
                                    params: parameters,
                                    returnType: returnType,
                                    returnTypeName: null,
                                    client: classAst.name.text // Class name
                                };
                                if (returnType === "TypeReference") {
                                    method_1.returnTypeName = member.type.typeName.text;
                                }
                                var meth = methods.find(function (meth) {
                                    return meth.SDKFunctionName === method_1.SDKFunctionName &&
                                        meth.fileName === method_1.fileName;
                                });
                                method_1.functionName = meth ? meth.functionName : null;
                                classInfo.methods.push(method_1);
                            }
                            if (typescript_1.SyntaxKind[member.kind] === "Constructor") {
                                var parameters = member.parameters.map(function (param) {
                                    return {
                                        name: param.name.text,
                                        optional: param.questionToken ? true : false,
                                        type: typescript_1.SyntaxKind[param.type.kind],
                                        typeRefName: param.type.typeName
                                            ? param.type.typeName.text
                                            : null
                                    };
                                });
                                classInfo.constructor = {
                                    parameters: parameters
                                };
                            }
                            if (typescript_1.SyntaxKind[member.kind] === "PropertyDeclaration") {
                                var isPrivateProp = member.modifiers &&
                                    member.modifiers.some(function (modifier) { return typescript_1.SyntaxKind[modifier.kind] === "PrivateKeyword"; });
                                if (!isPrivateProp) {
                                    var prop = {
                                        name: member.name.text,
                                        type: typescript_1.SyntaxKind[member.type.kind],
                                        typeRefName: member.type.typeName
                                            ? member.type.typeName.text
                                            : null
                                    };
                                    classInfo.properties.push(prop);
                                }
                            }
                        });
                        classes_1.push(classInfo);
                    });
                });
                methods = [];
                classes_1.map(function (classData) {
                    var filteredMethods = classData.methods.filter(function (meth) { return meth.functionName !== null; });
                    filteredMethods.map(function (filMeth) {
                        filMeth.classConstructorData = classData.constructor;
                    });
                    methods = methods.concat(filteredMethods);
                });
                extractedData = {
                    classes: classes_1,
                    methods: methods
                };
                if (JSON.stringify(methods) === JSON.stringify(specifiedMethods)) {
                    reject(new Error("Data extraction unsuccessful"));
                }
                else {
                    resolve(extractedData);
                }
            }
            catch (error) {
                reject(error);
            }
            return [2 /*return*/];
        });
    }); });
}
exports.extractClassBasedSDKData = extractClassBasedSDKData;
function extractClientBasedSDKdata(methods, sdkFiles) {
    var _this = this;
    var specifiedMethods = JSON.parse(JSON.stringify(methods));
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                sdkFiles.map(function (sdkFile) {
                    sdkFile.client = sdkFile.ast.name.text;
                    sdkFile.ast.members.map(function (member) {
                        if (typescript_1.SyntaxKind[member.kind] === "MethodDeclaration" &&
                            sdkFile.sdkFunctionNames.includes(member.name.text)) {
                            var method = methods.find(function (methd) { return methd.SDKFunctionName === member.name.text; });
                            var parameters = member.parameters.map(function (param) {
                                return {
                                    name: param.name.text,
                                    optional: param.questionToken ? true : false,
                                    type: typescript_1.SyntaxKind[param.type.kind]
                                };
                            });
                            var returnType = typescript_1.SyntaxKind[member.type.kind];
                            if (returnType === "TypeReference") {
                                method.returnTypeName = member.type.typeName.text;
                            }
                            if (!method.returnType) {
                                method.params = parameters;
                                method.returnType = returnType;
                                method.client = sdkFile.client;
                            }
                            else {
                                var clone = JSON.parse(JSON.stringify(method));
                                clone.params = parameters;
                                clone.returnType = returnType;
                                clone.client = sdkFile.client;
                                methods.push(clone);
                            }
                        }
                    });
                });
                if (JSON.stringify(methods) === JSON.stringify(specifiedMethods)) {
                    reject(new Error("Data extraction unsuccessful"));
                }
                else {
                    resolve(methods);
                }
            }
            catch (error) {
                reject(error);
            }
            return [2 /*return*/];
        });
    }); });
}
exports.extractClientBasedSDKdata = extractClientBasedSDKdata;
function generateClassBasedCode(methods, data, serviceName) {
    return __awaiter(this, void 0, void 0, function () {
        var dirPath, files, sdkFiles, extractedData, groupedMethods, output, filePath, dir;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirPath = "../../../node_modules/@google-cloud/" + methods[0].pkgName + "/build/src/";
                    files = fs.readdirSync(path.join(__dirname, dirPath));
                    files = files.filter(function (fileName) {
                        return fileName.split(".")[1] === "d" && fileName.split(".")[2] === "ts";
                    });
                    sdkFiles = files.map(function (fileName) {
                        return {
                            fileName: fileName,
                            pkgName: methods[0].pkgName,
                            classes: null,
                            sdkFunctionNames: methods
                                .filter(function (method) { return method.fileName === fileName; })
                                .map(function (method) { return method.SDKFunctionName; })
                        };
                    });
                    return [4 /*yield*/, Promise.all(sdkFiles.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = file;
                                        return [4 /*yield*/, parser_1.getAST(file, true)];
                                    case 1:
                                        _a.classes = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, extractClassBasedSDKData(methods, sdkFiles).then(function (result) { return result; })];
                case 2:
                    extractedData = _a.sent();
                    groupedMethods = helper_1.groupers.gcp(extractedData.methods);
                    methods = helper_1.filters.gcp(groupedMethods);
                    data.functions = methods;
                    data.classData = extractedData.classes;
                    data.serviceName = serviceName;
                    return [4 /*yield*/, classBasedTransformer_1.classBasedTransform(dummyAst, data)];
                case 3:
                    output = _a.sent();
                    dir = helper_1.getDir(serviceName);
                    if (!fs.existsSync(process.cwd() + "/generatedClasses/googleCloud/" + dir)) {
                        fs.mkdirSync(process.cwd() + "/generatedClasses/googleCloud/" + dir);
                    }
                    if (/^[A-Z]*$/.test(serviceName)) {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/googleCloud/" +
                                dir +
                                "/gcp-" +
                                serviceName +
                                ".js";
                    }
                    else {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/googleCloud/" +
                                dir +
                                "/gcp-" +
                                serviceName.charAt(0).toLowerCase() +
                                serviceName.slice(1) +
                                ".js";
                    }
                    helper_1.printFile(filePath, output);
                    return [2 /*return*/];
            }
        });
    });
}
function generateClientBasedCode(methods, serviceName) {
    return __awaiter(this, void 0, void 0, function () {
        var files, sdkFiles, groupedMethods, classData, output, filePath, dir;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = Array.from(new Set(methods.map(function (method) { return method.fileName + " " + method.version; })));
                    sdkFiles = files.map(function (file) {
                        return {
                            fileName: file.split(" ")[0],
                            version: file.split(" ")[1],
                            pkgName: methods[0].pkgName,
                            ast: null,
                            client: null,
                            sdkFunctionNames: methods
                                .filter(function (method) { return method.fileName === file.split(" ")[0]; })
                                .map(function (method) { return method.SDKFunctionName; })
                        };
                    });
                    return [4 /*yield*/, Promise.all(sdkFiles.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = file;
                                        return [4 /*yield*/, parser_1.getAST(file)];
                                    case 1:
                                        _a.ast = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, extractClientBasedSDKdata(methods, sdkFiles).then(function (result) { return result; })];
                case 2:
                    methods = _a.sent();
                    groupedMethods = helper_1.groupers.gcp(methods);
                    methods = helper_1.filters.gcp(groupedMethods);
                    classData = {
                        functions: methods,
                        serviceName: serviceName
                    };
                    return [4 /*yield*/, clientBasedTransformer_1.clientBasedTransform(dummyAst, classData)];
                case 3:
                    output = _a.sent();
                    dir = helper_1.getDir(serviceName);
                    if (!fs.existsSync(process.cwd() + "/generatedClasses/googleCloud/" + dir)) {
                        fs.mkdirSync(process.cwd() + "/generatedClasses/googleCloud/" + dir);
                    }
                    if (/^[A-Z]*$/.test(serviceName)) {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/googleCloud/" +
                                dir +
                                "/gcp-" +
                                serviceName +
                                ".js";
                    }
                    else {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/googleCloud/" +
                                dir +
                                "/gcp-" +
                                serviceName.charAt(0).toLowerCase() +
                                serviceName.slice(1) +
                                ".js";
                    }
                    helper_1.printFile(filePath, output);
                    return [2 /*return*/];
            }
        });
    });
}
function generateGCPClass(serviceClass, serviceName) {
    return __awaiter(this, void 0, void 0, function () {
        var methods, data;
        return __generator(this, function (_a) {
            methods = [];
            data = {};
            Object.keys(serviceClass).map(function (key, index) {
                if (key === "mainClass") {
                    data.mainClass = serviceClass[key];
                }
                else if (serviceClass[key].split(" ")[1].length === 2 &&
                    serviceClass[key].split(" ")[1].charAt(0) === "v") {
                    methods.push({
                        pkgName: serviceClass[key].split(" ")[0],
                        version: serviceClass[key].split(" ")[1],
                        fileName: serviceClass[key].split(" ")[2],
                        functionName: key,
                        SDKFunctionName: serviceClass[key].split(" ")[3],
                        params: [],
                        returnType: null,
                        returnTypeName: null,
                        client: null
                    });
                }
                else {
                    methods.push({
                        pkgName: serviceClass[key].split(" ")[0],
                        version: null,
                        fileName: serviceClass[key].split(" ")[1],
                        functionName: key,
                        SDKFunctionName: serviceClass[key].split(" ")[2],
                        params: [],
                        returnType: null,
                        returnTypeName: null,
                        client: null
                    });
                }
            });
            if (methods[0].version) {
                generateClientBasedCode(methods, serviceName);
            }
            else {
                generateClassBasedCode(methods, data, serviceName);
            }
            return [2 /*return*/];
        });
    });
}
exports.generateGCPClass = generateGCPClass;
