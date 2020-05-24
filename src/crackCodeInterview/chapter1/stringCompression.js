// Solution 1

// Check not a string

// iterate array
//  check if previous char === current char
//    true
//      sum occurrence
//    false
//      add previous char to array with occurrence if not ''
//      occurrence = 1
//   previous char = current char

// check if compressed length > original string
//  return original

// aabcaaad

const stringCompression = (string) => {
  if (typeof string !== "string") {
    return false;
  }

  let previousChar = " ";
  let compressed = "";
  let charOccurrence = 1;

  for (let i = 0; i <= string.length; i++) {
    const char = string[i] || " ";

    if (char === previousChar) {
      charOccurrence++;
    } else {
      if (previousChar !== " ") {
        compressed = `${compressed}${charOccurrence}${previousChar}`;
      }

      charOccurrence = 1;
    }

    previousChar = char;
  }

  return compressed.length > string.length ? string : compressed;
};

const { assert } = require("chai");

describe("stringCompression", () => {
  it.only("Should implement stringCompression", () => {
    assert.equal(stringCompression("aabcaaad"), "aabcaaad");
    assert.equal(stringCompression("aabbbbcaaaaaad"), "2a4b1c6a1d");
    assert.equal(stringCompression("     aabbbbcaaaaaad"), "2a4b1c6a1d");
    assert.equal(stringCompression("     aabbbbcaaaaaad    "), "2a4b1c6a1d");
    assert.equal(
      stringCompression("     aabbbb    caaaaaad    "),
      "2a4b1c6a1d"
    );
    assert.equal(stringCompression(12), false);
    assert.equal(stringCompression(), false);
  });
});
