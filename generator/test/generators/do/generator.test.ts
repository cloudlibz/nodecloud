import { expect } from "chai";
import { extractSDKData } from "../../../generators/do/generator";
import { readSourceFile, readJsonData } from "../lib/helper";
import { SyntaxKind } from "typescript";

describe("Digital Ocean generator extractSDKData", () => {
  context("with valid methods and valid AST", () => {
    it("should return extracted class data", async () => {
      const sdkFile: any = await readSourceFile("validDataset", "do");
      const data: any = await readJsonData(
        "validDataset",
        "do",
        "serviceClass"
      );
      let cloned = null;
      sdkFile.forEachChild(child => {
        if (SyntaxKind[child.kind] === "ClassDeclaration") {
          cloned = Object.assign({}, child);
        }
      });

      if (cloned) {
        const result = extractSDKData(cloned, data);
        expect(result).to.be.an("object");
        expect(result.functions).to.be.an("array");
        expect(result.className).to.be.string;
        
      } else {
        console.error("Error in cloning class");
      }
    });
  });

  context("with invalid method data:missing method name", () => {
    it("should drop invalid method", async () => {
      const sdkFile: any = await readSourceFile("invalidDataset_1", "do");
      const data: any = await readJsonData(
        "invalidDataset_1",
        "do",
        "serviceClass"
      );
      let cloned = null;
      sdkFile.forEachChild(child => {
        if (SyntaxKind[child.kind] === "ClassDeclaration") {
          cloned = Object.assign({}, child);
        }
      });

      if (cloned) {
        expect(
          extractSDKData(cloned, data).functions.length <
            Object.keys(data).length
        ).to.be.true;
      } else {
        console.error("Error in cloning class");
      }
    });
  });

  context("Digital Ocean with no functions", () => {
    it("should return empty array of methods", async () => {
      const sdkFile: any = await readSourceFile("invalidDataset_2", "do");
      const data: any = await readJsonData(
        "invalidDataset_2",
        "do",
        "serviceClass"
      );
      let cloned = null;
      sdkFile.forEachChild(child => {
        if (SyntaxKind[child.kind] === "ClassDeclaration") {
          cloned = Object.assign({}, child);
        }
      });

      if (cloned) {
        const result = extractSDKData(cloned, data);
        expect(result).to.be.an("object");
        expect(result.functions).to.be.an("array");
        expect(result.className).to.be.string;
        expect(result.functions.length).to.eql(0);
      } else {
        console.error("Error in cloning class");
      }
    });
  });
});
