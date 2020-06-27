// Solution 1 (O n)

// Chek if string and length > 1
// Iterate string
//  if empty char continue
//  check char is in hash
//    if not add to hash
//    if yes remove from hash
// Check keys
//  if 0 or 1 key return true

// Solution 1 (O n)

// Chek if string and length > 1
// Iterate string
//  if empty char continue
//  check char is in hash
//    if not add to hash
//    if yes remove from hash
// Check keys
//  if 0 or 1 key return true

const isPalindromePermutation = (string) => {
  if (typeof string !== "string") {
    return;
  }

  const charHash = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char.match(/\s/)) {
      continue;
    }

    if (charHash[char]) {
      delete charHash[char];
    } else {
      charHash[char] = 1;
    }
  }

  return Object.keys(charHash).length <= 1;
};

const isPalindromePermutationAlternative = (string) => {
  if (typeof string !== "string") {
    return;
  }

  const sortedString = string.replace(/\s/g, "").split("").sort();
  let extraChars = 0;
  let previousChar = "";

  return !sortedString.some((char) => {
    if (extraChars > 1) return true;

    if (char != previousChar && previousChar != "") {
      extraChars++;
    }

    if (char === previousChar) {
      previousChar = "";
      return;
    }

    previousChar = char;
  });
};

const { assert } = require("chai");

describe("isPalindromePermutation", () => {
  it("Should implement isPalindromePermutation", () => {
    assert.equal(isPalindromePermutation("taco bell"), false);
    assert.equal(isPalindromePermutation("tacao taco"), true);
    assert.equal(isPalindromePermutation("taco taco"), true);
    assert.equal(isPalindromePermutation("taco taco bll"), true);
    assert.equal(isPalindromePermutation("taacoaa tacao bll"), true);
    assert.equal(isPalindromePermutation("belle ba viitta"), true);
    assert.equal(isPalindromePermutation(), undefined);

    assert.equal(isPalindromePermutationAlternative("taco bell"), false);
    assert.equal(isPalindromePermutationAlternative("tacao taco"), true);
    assert.equal(isPalindromePermutationAlternative("taco taco"), true);
    assert.equal(isPalindromePermutationAlternative("taco taco bll"), true);
    assert.equal(isPalindromePermutationAlternative("taacoaa tacao bll"), true);
    assert.equal(isPalindromePermutationAlternative("belle ba viitta"), true);
    assert.equal(isPalindromePermutationAlternative(), undefined);
  });
});
