const bubbleSort = array => {
  let shouldSort = true;

  while (shouldSort) {
    shouldSort = false;

    for (let index = 0; index < array.length; index++) {
      let current = array[index];
      let next = array[index + 1] || current;

      if (current > next) {
        shouldSort = true;
        array[index] = next;
        array[index + 1] = current;
      }
    }
  }

  return array;
};

const _bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let current = array[j];
      let next = array[j + 1] || current;

      if (current > next) {
        shouldSort = true;
        array[j] = next;
        array[j + 1] = current;
      }
    }
  }

  return array;
};

const __bubbleSort = array => {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        hasSwapped = true;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
};

const { assert } = require("chai");

describe("Bubble Sort", () => {
  it("Should implement bubble sort", () => {
    assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(__bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(__bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
