// Solution 1

// isString && isString
// is same length
// duplicate first string
// check if string2 is substring

const isStringRotation = (string, rotation) => {
  if (typeof string !== "string" || typeof rotation !== "string") return false;
  if (string.length !== rotation.length) return false;

  return (string + string).includes(rotation);
};

const { assert } = require("chai");

describe("isStringRotation", () => {
  it.only("Should implement isStringRotation", () => {
    assert.equal(isStringRotation("labrador", "dorlabra"), true);
    assert.equal(isStringRotation("labrador", "dorlabrar"), false);
    assert.equal(isStringRotation("labrador", "doralbra"), false);
    assert.equal(isStringRotation("labrador", 1), false);
  });
});
