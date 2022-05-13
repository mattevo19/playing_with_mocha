import camelCase from "../camelCase.js";
import { assert } from "chai";

describe("camelCase", function () {
  it("app should return correct string theStealthWarrior", function () {
    assert.equal(camelCase("the-stealth-warrior"), "theStealthWarrior");
  });
  it("app should return theStealthWarrior", function () {
    assert.equal(camelCase("The_Stealth_Warrior"), "TheStealthWarrior");
  });
});
