const reverse = int => {
  const original = int.toString().replace(/-|([0]*)$/g, "");
  const inverted = original
    .split("")
    .reverse()
    .join("");
  return parseInt(int > 0 ? inverted : `-${inverted}`);
};

const { assert } = require("chai");

describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
    assert.equal(reverse(1234), 4321);
    assert.equal(reverse(-1200), -21);
  });
});
