const max = string => {
  const foundChars = new Map();

  string.split("").map(char => {
    const instancesFound = foundChars.get(char);
    foundChars.set(char, instancesFound ? instancesFound + 1 : 1);
  });

  let mostFoundkey = undefined;
  let mostFoundInstances = 0;
  foundChars.forEach((instances, key) => {
    if (instances > mostFoundInstances) {
      mostFoundkey = key;
      mostFoundInstances = instances;
    }
  });

  return mostFoundkey;
};

const { assert } = require("chai");

describe("Max Character", () => {
  it("Should return max character", () => {
    assert.equal(max("Hello World!"), "l");
  });
});
