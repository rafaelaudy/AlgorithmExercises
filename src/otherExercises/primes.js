const isPrime = number => {
  if (number < 2) return false;

  if (number === 2) return true;

  if (number % 2 === 0) return false;

  let isPrime = true;
  for (let index = 3; index < number / 2; index += 2) {
    if (number % index === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const primes = number => {
  const primes = [];
  for (let index = 0; index < number; index++) {
    if (isPrime(index)) {
      primes.push(index);
    }
  }

  return primes;
};

const { assert } = require("chai");

describe("Sieve of Eratosthenes", () => {
  it("Should return all prime numbers", () => {
    assert.deepEqual(primes(10), [2, 3, 5, 7]);
  });
});
