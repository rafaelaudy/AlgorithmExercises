const mapWords = string => {
  const map = new Map();
  string.match(/[a-zA-Z]+/g).map(word => {
    const key = word.toLowerCase();
    const mapValue = map.get(key);
    map.set(key, mapValue ? mapValue + 1 : 1);
  });
  return map;
};

const ransomNote = (note, magazine) => {
  const magazineWords = mapWords(magazine);
  const noteWords = mapWords(note);

  let canMakeRansonNote = true;
  let notesIterator = noteWords.entries();
  let next = notesIterator.next().value;

  while (next && canMakeRansonNote) {
    const [key, noteOccurrences] = next;
    const magazineOccurrences = magazineWords.get(key);
    if (!magazineOccurrences || magazineOccurrences < noteOccurrences) {
      canMakeRansonNote = false;
    }
    next = notesIterator.next().value;
  }

  return canMakeRansonNote;
};

const { assert } = require("chai");

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
describe("Ransom Note", () => {
  it("Should return true", () => {
    assert.equal(ransomNote("sit ad est sint", magazine), true);
  });
  it("Should return false", () => {
    assert.equal(ransomNote("sit ad est love", magazine), false);
  });
  it("Should return true", () => {
    assert.equal(ransomNote("sit ad est sint in in", magazine), true);
  });
  it("Should return false", () => {
    assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
  });
});
