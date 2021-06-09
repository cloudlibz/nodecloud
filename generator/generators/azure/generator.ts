import * as fs from "fs";
import { SyntaxKind, createSourceFile, ScriptTarget } from "typescript";
import { getAST } from "../../parsers/azure/parser";
import { groupers, filters, printFile, getDir } from "../lib/helper";
import { transform } from "../../transformers/azure/transformer";

interface FunctionData {
  pkgName: string;
  fileName: string;
  functionName: string;
  SDKFunctionName: string;
  params: param[];
  returnType: string;
  client: string;
}

interface param {
  name: string;
  type: string;
}

const dummyFile = process.cwd() + "/dummyClasses/azure.js";
const dummyAst = createSourceFile(
  dummyFile,
  fs.readFileSync(dummyFile).toString(),
  ScriptTarget.Latest,
  true
);

export function extractSDKData(sdkFiles, methods) {
  const specifiedMethods = JSON.parse(JSON.stringify(methods));
  sdkFiles.map(sdkFile => {
    sdkFile.ast.members.map(member => {
      if (SyntaxKind[member.kind] === "Constructor") {
        member.parameters.map(param => {
          const tempStr = param.type.typeName.text.split(/(?=[A-Z])/);
          tempStr.pop();
          sdkFile.client = tempStr.join("");
        });
      }

      if (
        SyntaxKind[member.kind] === "MethodDeclaration" &&
        sdkFile.sdkFunctionNames.includes(member.name.text)
      ) {
        const method = methods.find(
          methd =>
            methd.SDKFunctionName === member.name.text &&
            methd.fileName === sdkFile.fileName
        );
        const parameters = member.parameters.map(param => {
          return {
            name: param.name.text,
            optional: param.questionToken ? true : false,
            type: SyntaxKind[param.type.kind]
          };
        });

        const returnType = SyntaxKind[member.type.kind];
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
    throw new Error("Data extraction unsuccessful");
  }

  const groupedMethods = groupers.azure(methods);
  methods = filters.azure(groupedMethods);

  const classData = {
    functions: methods
  };

  return classData;
}

export async function generateAzureClass(serviceClass, serviceName) {
  let methods: FunctionData[] = [];

  Object.keys(serviceClass).map((key, index) => {
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

  const files = Array.from(new Set(methods.map(method => method.fileName)));

  const sdkFiles = files.map(file => {
    return {
      fileName: file,
      pkgName: methods[0].pkgName,
      ast: null,
      client: null,
      sdkFunctionNames: methods
        .filter(method => method.fileName === file)
        .map(method => method.SDKFunctionName)
    };
  });

  await Promise.all(
    sdkFiles.map(async file => {
      file.ast = await getAST(file);
    })
  );

  const classData: any = extractSDKData(sdkFiles, methods);
  classData.serviceName = serviceName;
  const output = await transform(dummyAst, classData);
  let filePath;
  const dir = getDir(serviceName);
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
  } else {
    filePath =
      process.cwd() +
      "/generatedClasses/Azure/" +
      dir +
      "/azure-" +
      serviceName.charAt(0).toLowerCase() +
      serviceName.slice(1) +
      ".js";
  }
  printFile(filePath, output);
}
