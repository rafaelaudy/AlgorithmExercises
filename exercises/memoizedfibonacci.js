const memoizedFibonacciMap = new Map();

const fibonacci = number => {
  if (number <= 2) return 1;

  const memoizedFibonacci = memoizedFibonacciMap.get(number);
  if (memoizedFibonacci) {
    return memoizedFibonacci;
  }

  console.log("fibonnaci - calculates and memoizes ", number);
  const fibonacciResult = fibonacci(number - 1) + fibonacci(number - 2);
  memoizedFibonacciMap.set(number, fibonacciResult);

  return fibonacciResult;
};

const { assert } = require("chai");

describe("Fibonacci - recursive and memoized", () => {
  it("Should implement fibonacci", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
  });
});
