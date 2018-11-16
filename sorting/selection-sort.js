const selectionSort = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    let bigger = { index: i, value: array[i] };

    for (let j = i - 1; j >= 0; j--) {
      if (bigger.value < array[j]) {
        bigger = { index: j, value: array[j] };
      }
    }

    array[bigger.index] = array[i];
    array[i] = bigger.value;
  }

  return array;
};

const { assert } = require("chai");

describe("Selection Sort", () => {
  it("Should sort an array", () => {
    assert.deepEqual(selectionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  });
});
