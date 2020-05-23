const pyramid = number => {
  let steps = "";
  let pyramidLength = number * 2 - 1;
  for (let index = 1; index <= number; index++) {
    const bordersLength = number - index;
    steps += `${" ".repeat(bordersLength)}${"#".repeat(
      pyramidLength - bordersLength * 2
    )}${" ".repeat(bordersLength)}\n`;
  }

  return steps;
};

const { assert } = require("chai");

describe("Pyramid", () => {
  it("Should print pyramid", () => {
    assert.equal(pyramid(3), "  #  \n ### \n#####\n");
    assert.equal(pyramid(4), "   #   \n  ###  \n ##### \n#######\n");
  });
});
