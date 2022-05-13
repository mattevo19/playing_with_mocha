import index from "../index.js";
import { assert } from "chai";

describe("Indedx", function () {
  it("app should return 64", function () {
    assert.equal(index(8, 8), 64);
  });
  it("app should return 81", function () {
    assert.equal(index(9, 9), 81);
  });
});
