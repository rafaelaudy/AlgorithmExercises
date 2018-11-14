const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let unsorted = array[i];

    let j = i - 1;
    for (; j > -1 && unsorted < array[j]; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = unsorted;
  }

  return array;
};

const { assert } = require("chai");

describe("Insertion Sort", () => {
  it("Should implement insertion sort", () => {
    assert.deepEqual(insertionSort([4, 3, 3, 2, 1]), [1, 2, 3, 3, 4]);
    assert.deepEqual(insertionSort([4, 3, 1, 2, 3]), [1, 2, 3, 3, 4]);
  });
});
