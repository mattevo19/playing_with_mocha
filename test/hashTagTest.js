import hashTagGen from "../hashTagGen.js";
import { assert } from "chai";

describe("hastTagGen", function () {
  it("app should return correct string #HelloThereThanksForTryingMyKata", function () {
    assert.equal(hashTagGen(" Hello there thanks for trying my Kata"), "#HelloThereThanksForTryingMyKata");
  });
  it("app should return #HelloWorld", function () {
    assert.equal(hashTagGen("    Hello     World   "), "#HelloWorld");
  });
  it("app should return false", function () {
    assert.equal(hashTagGen(""), false);
  });
});
