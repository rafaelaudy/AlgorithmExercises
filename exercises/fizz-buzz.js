const fizzBuzz = number => {
  const fizzBuzzArray = [];
  for (let counter = 1; counter <= number; counter++) {
    let fizzBuzz = "";

    fizzBuzz = counter % 2 === 0 ? "Fizz" : fizzBuzz;
    fizzBuzz = counter % 3 === 0 ? `${fizzBuzz} Buzz` : fizzBuzz;

    fizzBuzz = fizzBuzz.length ? fizzBuzz.trim() : counter.toString();

    fizzBuzzArray.push(fizzBuzz);
  }

  return fizzBuzzArray;
};

const { assert } = require("chai");

describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));
  it("Should output number", () => {
    assert.equal(output[0], 1);
  });
  it("Should output Fizz", () => {
    assert.equal(output[1], "Fizz");
  });
  it("Should output Buzz", () => {
    assert.equal(output[2], "Buzz");
  });
  it("Should output Fizz Buzz", () => {
    assert.equal(output[5], "Fizz Buzz");
  });
});
