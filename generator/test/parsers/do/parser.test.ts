import { expect } from "chai";
import { getAST } from "../../../parsers/do/parser";
import { SyntaxKind } from "typescript";

describe("Digital Ocean parser getAST", () => {
  context("With existing file", () => {
    it("Should return Abstract syntax tree of the class", async () => {
      const ast: any = await getAST("droplets.d.ts");
      expect(ast).to.be.an("object");
      expect(SyntaxKind[ast.kind] === "ClassDeclaration").to.be.true;
    });
  });

  context("With non-existing file", () => {
    it("should return File not found Error", async () => {
      try {
        await getAST("unknown.d.ts");
      } catch (error) {
        expect(error.message).to.eql("File not found!");
      }
    });
  });

  context("With wrong format file", () => {
    it("Should return class not found Error", async () => {
      try {
        await getAST("../types/common.d.ts");
      } catch (error) {
        expect(error.message).to.eql("Class not found!");
      }
    });
  });

});
