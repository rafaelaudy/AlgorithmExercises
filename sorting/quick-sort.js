const quickSort = array => {
  if (array.length < 2) return array;

  let bigger = [];
  let smaller = [];
  let pivot = array[array.length - 1];

  for (let i = 0; i < array.length - 1; i++) {
    const value = array[i];
    if (value > pivot) bigger.push(value);
    else smaller.push(value);
  }

  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};

const { assert } = require("chai");

describe("Quick Sort", () => {
  it("Should implement quick sort", () => {
    assert.deepEqual(quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(quickSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
