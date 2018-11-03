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

const fizzBuzzAlternative = number => {
  const fizzBuzzArray = [];
  for (let counter = 1; counter <= number; counter++) {
    if (counter % 6 === 0) {
      fizzBuzzArray.push("Fizz Buzz");
    } else if (counter % 2 === 0) {
      fizzBuzzArray.push("Fizz");
    } else if (counter % 3 === 0) {
      fizzBuzzArray.push("Buzz");
    } else {
      fizzBuzzArray.push(counter);
    }
  }

  return fizzBuzzArray;
};

const { assert } = require("chai");

describe("Fizz Buzz", () => {
  let fizzBuzzOutput = fizzBuzz(30);
  let fizzBuzzAlternativeOutput = fizzBuzzAlternative(30);

  it("Should output number", () => {
    assert.equal(fizzBuzzOutput[0], 1);
    assert.equal(fizzBuzzAlternativeOutput[0], 1);
  });
  it("Should output Fizz", () => {
    assert.equal(fizzBuzzOutput[1], "Fizz");
    assert.equal(fizzBuzzAlternativeOutput[1], "Fizz");
  });
  it("Should output Buzz", () => {
    assert.equal(fizzBuzzOutput[2], "Buzz");
    assert.equal(fizzBuzzAlternativeOutput[2], "Buzz");
  });
  it("Should output Fizz Buzz", () => {
    assert.equal(fizzBuzzOutput[5], "Fizz Buzz");
    assert.equal(fizzBuzzAlternativeOutput[5], "Fizz Buzz");
  });
});
