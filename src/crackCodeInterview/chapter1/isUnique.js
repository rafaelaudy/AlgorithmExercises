// r a f a e l  // r a f i e l
//   check is string?

//   hash map
//   iterate and add
//      check if the key is already there and break

const allUniqueChars = (string) => {
  if (typeof string !== "string") {
    return false;
  }

  const charHash = {};

  return !string.split("").some((char) => {
    if (charHash[char]) {
      return true;
    }

    charHash[char] = 1;
  });
};

const { assert } = require("chai");

describe("isUnique", () => {
  it.only("Should implement isUnique", () => {
    assert.equal(allUniqueChars("abcd"), true);
    assert.equal(allUniqueChars("abccd"), false);
    assert.equal(allUniqueChars("bhjjb"), false);
    assert.equal(allUniqueChars("mdjq"), true);
    assert.equal(allUniqueChars(12), false);
    assert.equal(allUniqueChars(), false);
  });
});
