const anagrams = (string, anagram) => {
  const stringArray = string.split("");
  const anagramArray = anagram.split("");

  if (string.length != anagram.length) return false;

  return stringArray.sort().toString() === anagramArray.sort().toString();
};

const anagramsFaster = (string, anagram) => {
  const stringArray = string.split("");
  const anagramArray = anagram.split("");

  if (string.length != anagram.length) return false;

  const stringMap = new Map();
  const anagramMap = new Map();

  for (let index = 0; index < string.length; index++) {
    stringMap.set(
      stringArray[index],
      (stringMap.get(stringArray[index]) || 0) + 1
    );
    anagramMap.set(
      anagramArray[index],
      (anagramMap.get(anagramArray[index]) || 0) + 1
    );
  }

  const keys = [...new Set([...anagramMap.keys(), ...stringMap.keys()])];
  for (let index = 0; index < keys.length; index++) {
    const char = keys[index];
    if (anagramMap.get(char) !== stringMap.get(char)) {
      return false;
    }
  }

  return true;
};

const anagramsFasterBetterStronger = (string, anagram) => {
  if (string.length != anagram.length) return false;

  const stringMap = {};
  const anagramMap = {};

  for (let index = 0; index < string.length; index++) {
    stringMap[string[index]] = (stringMap[string[index]] || 0) + 1;
    anagramMap[anagram[index]] = (anagramMap[anagram[index]] || 0) + 1;
  }

  if (Object.keys(stringMap).length !== Object.keys(anagramMap).length)
    return false;

  for (let char in stringMap)
    if (stringMap[char] !== anagramMap[char]) return false;

  return true;
};

const { assert } = require("chai");

describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    assert.equal(anagrams("hello world", "world hello"), true);
    assert.equal(anagrams("hellow world", "hello there"), false);
    assert.equal(anagrams("hellow world", "hello there!"), false);
    assert.equal(anagramsFaster("hello world", "world hello"), true);
    assert.equal(anagramsFaster("hellow world", "hello there"), false);
    assert.equal(anagramsFaster("hellow world", "hello there!"), false);
    assert.equal(
      anagramsFasterBetterStronger("hello world", "world hello"),
      true
    );
    assert.equal(
      anagramsFasterBetterStronger("hellow world", "hello there"),
      false
    );
    assert.equal(
      anagramsFasterBetterStronger("hellow world", "hello there!"),
      false
    );
  });
});
