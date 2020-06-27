const fibonacci = number => {
  if (number < 2) return 1;

  const fibonacciValues = [1, 1];
  for (let index = 2; index < number; index++) {
    fibonacciValues.push(
      fibonacciValues[index - 1] + fibonacciValues[index - 2]
    );
  }

  return fibonacciValues[fibonacciValues.length - 1];
};

const { assert } = require("chai");

describe("Fibonacci", () => {
  it("Should implement fibonacci", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
  });
});
