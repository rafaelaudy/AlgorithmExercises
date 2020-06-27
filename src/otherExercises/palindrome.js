const isPalindrome = string => {
  const charArray = string
    .toLowerCase()
    .replace(/[\W]/g, "")
    .split("");

  let last = charArray.length - 1;

  for (let index = 0; index < charArray.length / 2; index++) {
    if (charArray[index] != charArray[last]) return false;
    last--;
  }

  return true;
};

const isPalindromeAlternative = string => {
  const original = string.toLowerCase().replace(/[\W]/g, "");
  const inverted = original
    .split("")
    .reverse()
    .join("");

  return original === inverted;
};

const { assert } = require("chai");

describe("Palindrome", () => {
  it("Should return true", () => {
    assert.equal(
      isPalindrome("Cigar? Toss it in a can. It is so tragic"),
      true
    );

    assert.equal(
      isPalindromeAlternative("Cigar? Toss it in a can. It is so tragic"),
      true
    );
  });
  it("Should return false", () => {
    assert.equal(isPalindrome("sit ad est love"), false);
    assert.equal(isPalindromeAlternative("sit ad est love"), false);
  });
});
