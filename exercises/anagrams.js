const anagrams = (string, anagram) => {
  const stringArray = string.split("");
  const anagramArray = anagram.split("");

  if (string.length != anagram.length) return false;

  return stringArray.sort().toString() === anagramArray.sort().toString();
};

const { assert } = require("chai");

describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    assert.equal(anagrams("hello world", "world hello"), true);
    assert.equal(anagrams("hellow world", "hello there"), false);
    assert.equal(anagrams("hellow world", "hello there!"), false);
  });
});
