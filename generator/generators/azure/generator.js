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
exports.generateAzureClass = exports.extractSDKData = void 0;
var fs = require("fs");
var typescript_1 = require("typescript");
var parser_1 = require("../../parsers/azure/parser");
var helper_1 = require("../lib/helper");
var transformer_1 = require("../../transformers/azure/transformer");
var dummyFile = process.cwd() + "/dummyClasses/azure.js";
var dummyAst = typescript_1.createSourceFile(dummyFile, fs.readFileSync(dummyFile).toString(), typescript_1.ScriptTarget.Latest, true);
function extractSDKData(sdkFiles, methods) {
    var specifiedMethods = JSON.parse(JSON.stringify(methods));
    sdkFiles.map(function (sdkFile) {
        sdkFile.ast.members.map(function (member) {
            if (typescript_1.SyntaxKind[member.kind] === "Constructor") {
                member.parameters.map(function (param) {
                    var tempStr = param.type.typeName.text.split(/(?=[A-Z])/);
                    tempStr.pop();
                    sdkFile.client = tempStr.join("");
                });
            }
            if (typescript_1.SyntaxKind[member.kind] === "MethodDeclaration" &&
                sdkFile.sdkFunctionNames.includes(member.name.text)) {
                var method = methods.find(function (methd) {
                    return methd.SDKFunctionName === member.name.text &&
                        methd.fileName === sdkFile.fileName;
                });
                var parameters = member.parameters.map(function (param) {
                    return {
                        name: param.name.text,
                        optional: param.questionToken ? true : false,
                        type: typescript_1.SyntaxKind[param.type.kind]
                    };
                });
                var returnType = typescript_1.SyntaxKind[member.type.kind];
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
        throw new Error("Data extraction unsuccessful");
    }
    var groupedMethods = helper_1.groupers.azure(methods);
    methods = helper_1.filters.azure(groupedMethods);
    var classData = {
        functions: methods
    };
    return classData;
}
exports.extractSDKData = extractSDKData;
function generateAzureClass(serviceClass, serviceName) {
    return __awaiter(this, void 0, void 0, function () {
        var methods, files, sdkFiles, classData, output, filePath, dir;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    methods = [];
                    Object.keys(serviceClass).map(function (key, index) {
                        methods.push({
                            pkgName: serviceClass[key].split(" ")[0],
                            fileName: serviceClass[key].split(" ")[1],
                            functionName: key,
                            SDKFunctionName: serviceClass[key].split(" ")[2],
                            params: [],
                            returnType: null,
                            client: null
                        });
                    });
                    files = Array.from(new Set(methods.map(function (method) { return method.fileName; })));
                    sdkFiles = files.map(function (file) {
                        return {
                            fileName: file,
                            pkgName: methods[0].pkgName,
                            ast: null,
                            client: null,
                            sdkFunctionNames: methods
                                .filter(function (method) { return method.fileName === file; })
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
                    classData = extractSDKData(sdkFiles, methods);
                    classData.serviceName = serviceName;
                    return [4 /*yield*/, transformer_1.transform(dummyAst, classData)];
                case 2:
                    output = _a.sent();
                    dir = helper_1.getDir(serviceName);
                    if (!fs.existsSync(process.cwd() + "/generatedClasses/Azure/" + dir)) {
                        fs.mkdirSync(process.cwd() + "/generatedClasses/Azure/" + dir);
                    }
                    if (/^[A-Z]*$/.test(serviceName)) {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/Azure/" +
                                dir +
                                "/azure-" +
                                serviceName +
                                ".js";
                    }
                    else {
                        filePath =
                            process.cwd() +
                                "/generatedClasses/Azure/" +
                                dir +
                                "/azure-" +
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
exports.generateAzureClass = generateAzureClass;
