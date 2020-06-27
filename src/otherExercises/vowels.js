const vowels = string => string.toLowerCase().replace(/[^aeiou]/g, "").length;

const vowelsAlternative = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  return string
    .toLowerCase()
    .split("")
    .reduce(
      (acc, current) =>
        vowels.includes(current) ? [...acc, current] : [...acc],
      []
    )
    .join("").length;
};

const vowelsFast = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    if (vowels.includes(string[index].toLowerCase())) sum++;
  }

  return sum;
};

const { assert } = require("chai");

describe("Vowels", () => {
  it("Should count vowels", () => {
    assert.equal(vowels("hello world"), 3);
    assert.equal(vowelsAlternative("hello world"), 3);
    assert.equal(vowelsFast("hello world"), 3);
  });
});
