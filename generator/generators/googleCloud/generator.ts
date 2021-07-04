import * as fs from "fs";
import * as path from "path";
import { SyntaxKind, createSourceFile, ScriptTarget } from "typescript";
import { getAST } from "../../parsers/googleCloud/parser";
import { filters, groupers, printFile, getDir } from "../lib/helper";
import { clientBasedTransform } from "../../transformers/googleCloud/clientBasedTransformer";
import { classBasedTransform } from "../../transformers/googleCloud/classBasedTransformer";

interface ClassData {
  name: string;
  methods: FunctionData[];
  constructor: constructorData;
  properties: propertyData[];
}

interface FunctionData {
  pkgName: string;
  version: string;
  fileName: string;
  functionName: string;
  SDKFunctionName: string;
  params: param[];
  returnType: string;
  returnTypeName: string;
  client: string;
}

interface propertyData {
  name: string;
  type: string;
}

interface constructorData {
  parameters: param[];
}

interface param {
  name: string;
  type: string;
  optional: boolean;
}

const dummyFile = process.cwd() + "/dummyClasses/gcp.js";
const dummyAst = createSourceFile(
  dummyFile,
  fs.readFileSync(dummyFile).toString(),
  ScriptTarget.Latest,
  true
);

export function extractClassBasedSDKData(methods, sdkFiles): any {
  const specifiedMethods = JSON.parse(JSON.stringify(methods));
  return new Promise(async (resolve, reject) => {
    try {
      let classes: ClassData[] = [];

      sdkFiles.map(file => {
        file.classes.map(classAst => {
          const classInfo: ClassData = {
            name: classAst.name.text,
            methods: [],
            properties: [],
            constructor: null
          };

          classAst.members.map(member => {
            if (SyntaxKind[member.kind] === "MethodDeclaration") {
              const returnType = SyntaxKind[member.type.kind];

              const parameters = member.parameters.map(param => {
                return {
                  name: param.name.text,
                  optional: param.questionToken ? true : false,
                  type: SyntaxKind[param.type.kind]
                };
              });
              const method: FunctionData = {
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
                method.returnTypeName = member.type.typeName.text;
              }

              const meth = methods.find(
                meth =>
                  meth.SDKFunctionName === method.SDKFunctionName &&
                  meth.fileName === method.fileName
              );
              method.functionName = meth ? meth.functionName : null;
              classInfo.methods.push(method);
            }

            if (SyntaxKind[member.kind] === "Constructor") {
              const parameters = member.parameters.map(param => {
                return {
                  name: param.name.text,
                  optional: param.questionToken ? true : false,
                  type: SyntaxKind[param.type.kind],
                  typeRefName: param.type.typeName
                    ? param.type.typeName.text
                    : null
                };
              });

              classInfo.constructor = {
                parameters
              };
            }

            if (SyntaxKind[member.kind] === "PropertyDeclaration") {
              const isPrivateProp =
                member.modifiers &&
                member.modifiers.some(
                  modifier => SyntaxKind[modifier.kind] === "PrivateKeyword"
                );
              if (!isPrivateProp) {
                const prop = {
                  name: member.name.text,
                  type: SyntaxKind[member.type.kind],
                  typeRefName: member.type.typeName
                    ? member.type.typeName.text
                    : null
                };
                classInfo.properties.push(prop);
              }
            }
          });
          classes.push(classInfo);
        });
      });

      methods = [];

      classes.map(classData => {
        let filteredMethods: any = classData.methods.filter(
          meth => meth.functionName !== null
        );
        filteredMethods.map(filMeth => {
          filMeth.classConstructorData = classData.constructor;
        });

        methods = methods.concat(filteredMethods);
      });

      const extractedData = {
        classes,
        methods
      };
      if (JSON.stringify(methods) === JSON.stringify(specifiedMethods)) {
        reject(new Error("Data extraction unsuccessful"));
      } else {
        resolve(extractedData);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function extractClientBasedSDKdata(methods, sdkFiles): any {
  const specifiedMethods = JSON.parse(JSON.stringify(methods));
  return new Promise(async (resolve, reject) => {
    try {
      sdkFiles.map(sdkFile => {
        sdkFile.client = sdkFile.ast.name.text;
        sdkFile.ast.members.map(member => {
          if (
            SyntaxKind[member.kind] === "MethodDeclaration" &&
            sdkFile.sdkFunctionNames.includes(member.name.text)
          ) {
            const method = methods.find(
              methd => methd.SDKFunctionName === member.name.text
            );

            const parameters = member.parameters.map(param => {
              return {
                name: param.name.text,
                optional: param.questionToken ? true : false,
                type: SyntaxKind[param.type.kind]
              };
            });

            const returnType = SyntaxKind[member.type.kind];
            if (returnType === "TypeReference") {
              method.returnTypeName = member.type.typeName.text;
            }

            if (!method.returnType) {
              method.params = parameters;
              method.returnType = returnType;
              method.client = sdkFile.client;
            } else {
              const clone = JSON.parse(JSON.stringify(method));
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
      } else {
        resolve(methods);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function generateClassBasedCode(methods, data, serviceName) {
  const dirPath = `../../../node_modules/@google-cloud/${methods[0].pkgName}/build/src/`;
  let files = fs.readdirSync(path.join(__dirname, dirPath));
  files = files.filter(
    fileName =>
      fileName.split(".")[1] === "d" && fileName.split(".")[2] === "ts"
  );

  const sdkFiles = files.map(fileName => {
    return {
      fileName: fileName,
      pkgName: methods[0].pkgName,
      classes: null,
      sdkFunctionNames: methods
        .filter(method => method.fileName === <string>fileName)
        .map(method => method.SDKFunctionName)
    };
  });

  await Promise.all(
    sdkFiles.map(async file => {
      file.classes = await getAST(file, true);
    })
  );

  const extractedData = await extractClassBasedSDKData(methods, sdkFiles).then(
    result => result
  );
  const groupedMethods = groupers.gcp(extractedData.methods);
  methods = filters.gcp(groupedMethods);
  data.functions = methods;
  data.classData = extractedData.classes;
  data.serviceName = serviceName;

  const output = await classBasedTransform(dummyAst, data);
  let filePath;
  const dir = getDir(serviceName);
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
  } else {
    filePath =
      process.cwd() +
      "/generatedClasses/googleCloud/" +
      dir +
      "/gcp-" +
      serviceName.charAt(0).toLowerCase() +
      serviceName.slice(1) +
      ".js";
  }
  printFile(filePath, output);
}

async function generateClientBasedCode(methods, serviceName) {
  const files = Array.from(
    new Set(methods.map(method => method.fileName + " " + method.version))
  );
  const sdkFiles = files.map(file => {
    return {
      fileName: (<string>file).split(" ")[0],
      version: (<string>file).split(" ")[1],
      pkgName: methods[0].pkgName,
      ast: null,
      client: null,
      sdkFunctionNames: methods
        .filter(method => method.fileName === (<string>file).split(" ")[0])
        .map(method => method.SDKFunctionName)
    };
  });

  await Promise.all(
    sdkFiles.map(async file => {
      file.ast = await getAST(file);
    })
  );

  methods = await extractClientBasedSDKdata(methods, sdkFiles).then(
    result => result
  );
  const groupedMethods = groupers.gcp(methods);
  methods = filters.gcp(groupedMethods);

  const classData = {
    functions: methods,
    serviceName
  };

  const output = await clientBasedTransform(dummyAst, classData);
  let filePath;
  const dir = getDir(serviceName);
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
  } else {
    filePath =
      process.cwd() +
      "/generatedClasses/googleCloud/" +
      dir +
      "/gcp-" +
      serviceName.charAt(0).toLowerCase() +
      serviceName.slice(1) +
      ".js";
  }
  printFile(filePath, output);
}

export async function generateGCPClass(serviceClass, serviceName) {
  let methods: FunctionData[] = [];
  const data: any = {};

  Object.keys(serviceClass).map((key, index) => {
    if (key === "mainClass") {
      data.mainClass = serviceClass[key];
    } else if (
      serviceClass[key].split(" ")[1].length === 2 &&
      serviceClass[key].split(" ")[1].charAt(0) === "v"
    ) {
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
    } else {
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
  } else {
    generateClassBasedCode(methods, data, serviceName);
  }
}
