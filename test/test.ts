import { describe, it } from "mocha";
import { expect } from "chai";
import { lol } from "../src";

describe("lol", () => {
    it("solves those pesky complier errors", () => {
        const x: number = <lol> "3";
        expect(x).to.deep.equal("3");
    });
});
