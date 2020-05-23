// Solution 1

// Check not a string
// Check length difference more than 1

// iterate both arrays
//    left string add 1 to hash on every char
//    right string remove 1 to hash on every chat
//    remove prop from hash when 0

// if sum of hash key > 2 false

// otherwise true

// "pale" " ale" true
// "pale" "pali " false
// "bynk" "nbik " true

const oneChangeTo = (string, changeTo) => {
  if (typeof string !== "string" || typeof changeTo !== "string") {
    return false;
  }

  const lengthComparison = string.length - changeTo.length;
  if (lengthComparison > 1 || lengthComparison < -1) {
    return false;
  }

  const hash = {};
  const length =
    string.length > changeTo.length ? string.length : changeTo.length;
  for (let i = 0; i < length; i++) {
    const charLeft = string[i] ? string[i] : "";
    const charRight = changeTo[i] ? changeTo[i] : "";

    hash[charLeft] = hash[charLeft] !== undefined ? hash[charLeft] + 1 : 1;
    hash[charRight] = hash[charRight] !== undefined ? hash[charRight] - 1 : -1;

    if (hash[charLeft] === 0) delete hash[charLeft];
    if (hash[charRight] === 0) delete hash[charRight];
  }

  return Object.keys(hash).length < 3;
};

const { assert } = require("chai");

describe("oneChangeTo", () => {
  it.only("Should implement oneChangeTo", () => {
    assert.equal(oneChangeTo("pale", "ple"), true);
    assert.equal(oneChangeTo("pales", "pale"), true);
    assert.equal(oneChangeTo("pale", "bale"), true);
    assert.equal(oneChangeTo("pale", "bake"), false);
    assert.equal(oneChangeTo("pale", " ale"), true);
    assert.equal(oneChangeTo("pale", "pali "), false);
    assert.equal(oneChangeTo("bynk", "nbik "), false);
    assert.equal(oneChangeTo(12, "12"), false);
    assert.equal(oneChangeTo(), false);
  });
});
