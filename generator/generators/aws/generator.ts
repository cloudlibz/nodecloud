import * as fs from "fs";
import { createSourceFile, ScriptTarget, SyntaxKind } from "typescript";
import { getAST } from "../../parsers/aws/parser";
import { transform } from "../../transformers/aws/transformer";
import { filters, groupers, printFile, getDir } from "../lib/helper";

interface FunctionData {
  functionName: string;
  SDKFunctionName: string;
  params: param[];
}

interface param {
  name: string;
  type: string;
  typeName: string;
}

interface ClassData {
  className: string;
  functions: FunctionData[];
  serviceName: string;
}

const dummyFile = process.cwd() + "/dummyClasses/aws.js";
const dummyAst = createSourceFile(
  dummyFile,
  fs.readFileSync(dummyFile).toString(),
  ScriptTarget.Latest,
  true
);

export function extractSDKData(sdkClassAst, serviceClass) {
  let methods: FunctionData[] = [];
  const functions = [];

  Object.keys(serviceClass).map((key, index) => {
    functions.push(serviceClass[key].split(" ")[1]);
  });

  sdkClassAst.members.map(method => {
    if (method.name && functions.includes(method.name.text)) {
      let name;
      Object.keys(serviceClass).map((key, index) => {
        if (serviceClass[key].split(" ")[1] === method.name.text) {
          name = key;
        }
      });

      const parameters = [];
      method.parameters.map(param => {
        if (param.name.text !== "callback") {
          const parameter = {
            name: param.name.text,
            optional: param.questionToken ? true : false,
            type: SyntaxKind[param.type.kind],
            typeName: null
          };

          if (parameter.type === "TypeReference" && param.type.typeName) {
            parameter.typeName = param.type.typeName.right.text;
          }

          parameters.push(parameter);
        }
      });

      methods.push({
        functionName: name.toString(),
        SDKFunctionName: method.name.text.toString(),
        params: parameters
      });
    }
  });

  const groupedMethods = groupers.aws(methods);
  methods = filters.aws(groupedMethods);

  const classData: ClassData = {
    className: sdkClassAst.name.text,
    functions: methods,
    serviceName: null
  };

  return classData;
}

export function generateAWSClass(serviceClass, serviceName) {
  const sdkFile = serviceClass[Object.keys(serviceClass)[0]].split(" ")[0];
  getAST(sdkFile).then(async result => {
    const sdkClassAst = result;
    try {
      const classData: ClassData = extractSDKData(sdkClassAst, serviceClass);
      classData.serviceName = serviceName;
      const output = await transform(dummyAst, classData);
      let filePath;
      const dir = getDir(serviceName);
      if (!fs.existsSync(process.cwd() + "/generatedClasses/AWS/" + dir)) {
        fs.mkdirSync(process.cwd() + "/generatedClasses/AWS/" + dir);
      }
      if (/^[A-Z]*$/.test(serviceName)) {
        filePath =
          process.cwd() +
          "/generatedClasses/AWS/" +
          dir +
          "/aws-" +
          serviceName +
          ".js";
      } else {
        filePath =
          process.cwd() +
          "/generatedClasses/AWS/" +
          dir +
          "/aws-" +
          serviceName.charAt(0).toLowerCase() +
          serviceName.slice(1) +
          ".js";
      }
      printFile(filePath, output);
    } catch (e) {
      console.error(e);
    }
  });
}
