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

const _quickSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array.pop();
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    item <= pivot ? left.push(item) : right.push(item);
  }

  const sortedLeft = _quickSort(left);
  const sortedRight = _quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
};

const { assert } = require("chai");

describe("Quick Sort", () => {
  it("Should implement quick sort", () => {
    assert.deepEqual(quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(quickSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_quickSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
