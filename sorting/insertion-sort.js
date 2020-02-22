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

const _insertionSort = array => {
  let sortedArray = [array[0]];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    for (let j = 0; j < i; j++) {
      const compareTo = sortedArray[j];

      if (current <= compareTo) {
        sortedArray = [
          ...sortedArray.slice(0, j),
          current,
          ...sortedArray.slice(j)
        ];
        break;
      }
    }
  }

  return sortedArray;
};

const { assert } = require("chai");

describe("Insertion Sort", () => {
  it("Should implement insertion sort", () => {
    assert.deepEqual(insertionSort([4, 3, 3, 2, 1]), [1, 2, 3, 3, 4]);
    assert.deepEqual(insertionSort([4, 3, 1, 2, 3]), [1, 2, 3, 3, 4]);
    assert.deepEqual(_insertionSort([4, 3, 3, 2, 1]), [1, 2, 3, 3, 4]);
    assert.deepEqual(_insertionSort([4, 3, 1, 2, 3]), [1, 2, 3, 3, 4]);
  });
});
