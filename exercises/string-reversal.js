const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

const reverseAlternative = string => {
  let reverse = [];
  let last = string.length - 1;

  for (let initial = 0; initial < string.length; initial++) {
    reverse[initial] = string[last];
    reverse[last] = string[initial];
    last--;
  }

  return reverse.join("");
};

const { assert } = require("chai");

describe("String Reversal", () => {
  it("Should reverse string", () => {
    assert.equal(reverse("Hello World!"), "!dlroW olleH");
    assert.equal(reverseAlternative("HelloWorld!"), "!dlroWolleH");
    assert.equal(reverseAlternative("Hello World!"), "!dlroW olleH");
  });
});
