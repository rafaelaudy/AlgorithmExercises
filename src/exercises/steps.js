const steps = number => {
  let steps = "";
  for (let index = 1; index <= number; index++) {
    steps += `${"#".repeat(index)}${" ".repeat(number - index)}\n`;
  }

  return steps;
};

const { assert } = require("chai");

describe("Steps", () => {
  it("Should print steps", () => {
    assert.equal(steps(3), "#  \n## \n###\n");
  });
});
