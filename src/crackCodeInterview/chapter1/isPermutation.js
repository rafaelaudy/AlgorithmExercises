// Solution 1

// Check if both are strings
// Remove whitespaces
// Check if strings are different length

// run array 1 and count different chars
// run array 2 and count different chars
// run chars count and check if they are the same

// Solution 2

// Check if both are strings
// Remove whitespaces
// Check if strings are different length

// run array 1/2 and count different chars
// run chars count and check if they are the same

// Solution 3

// Check if both are strings
// Remove whitespaces
// Check if strings are different length

// run array 1/2 and count different chars
// first arrays adds, second array removes
// if hash === 0 delete prop
// check hash.keys === 0

// Alternative Solution - using language features / less performance

// Check if both are strings
// Check if strings are different length

// order both arrays
// check exact string

const isPermutation = (string1, string2) => {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return false;
  }

  const mappedString1 = string1.replace(/\s/g, "");
  const mappedString2 = string2.replace(/\s/g, "");

  if (mappedString1.length !== mappedString2.length) {
    return false;
  }

  const sumCharHash = (charHash, mappedString, index, value) => {
    let currentChar = mappedString[index];
    charHash[currentChar] = charHash[currentChar]
      ? charHash[currentChar] + value
      : value;
    if (charHash[currentChar] === 0) {
      delete charHash[currentChar];
    }
  };

  const charHash = {};
  for (let i = 0; i < mappedString1.length; i++) {
    sumCharHash(charHash, mappedString1, i, 1);
    sumCharHash(charHash, mappedString2, i, -1);
  }

  return Object.keys(charHash).length === 0;
};

const isPermutationAlternative = (string1, string2) => {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return false;
  }

  if (string1.length !== string2.length) {
    return false;
  }

  return (
    string1.split("").sort().concat().join() ===
    string2.split("").sort().concat().join()
  );
};

const { assert } = require("chai");

describe("isPermutation", () => {
  it("Should implement isPermutation", () => {
    assert.equal(isPermutation("123", 123), false);
    assert.equal(isPermutation("abcd", "bcad"), true);
    assert.equal(isPermutation("abcdaa", "bacada"), true);
    assert.equal(isPermutation("abcdaa", "aaabbb"), false);
    assert.equal(isPermutation("abcd", "abcr"), false);
    assert.equal(isPermutation("abcd", "abc"), false);

    assert.equal(isPermutationAlternative("123", 123), false);
    assert.equal(isPermutationAlternative("abcd", "bcad"), true);
    assert.equal(isPermutationAlternative("abcdaa", "bacada"), true);
    assert.equal(isPermutationAlternative("abcdaa", "aaabbb"), false);
    assert.equal(isPermutationAlternative("abcd", "abcr"), false);
    assert.equal(isPermutationAlternative("abcd", "abc"), false);
  });
});
