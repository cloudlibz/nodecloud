import * as fs from "fs";
import * as path from "path";
import { createSourceFile, ScriptTarget, SyntaxKind } from "typescript";

export function getAST(sdkFileName) {
  return new Promise(async (resolve, reject) => {
    try {
      const file = path.join(
        __dirname,
        "../../node_modules/do-wrapper/dist/modules/" + sdkFileName.toLowerCase()
      );
      const ast = createSourceFile(
        file,
        fs.readFileSync(file).toString(),
        ScriptTarget.Latest,
        true
      );

      let cloned = null;
      
      await ast.forEachChild(child => {
      
        if (SyntaxKind[child.kind] === "ClassDeclaration") {
          cloned = Object.assign({}, child);
        }
      });
      
      if (!cloned) {
        reject(new Error("Class not found!"));
      } else {
        resolve(cloned);
      }
    } catch (error) {
      if (error.code === "ENOENT") {
        reject(new Error("File not found!"));
      } else {
        reject(error);
      }
    }
  });
}
