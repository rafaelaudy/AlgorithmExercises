const binarySearch = (sortedArray, toFind) => {
  let items = sortedArray;

  while (items.length > 0) {
    const middleIndex = Math.round(items.length / 2) - 1;
    const middleValue = items[middleIndex];

    if (toFind < middleValue) {
      items = items.slice(0, middleIndex);
    } else if (toFind > middleValue) {
      items = items.slice(middleIndex + 1, items.length);
    } else if (middleValue === toFind) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

const _binarySearch = (sortedArray, toFind) => {
  let items = [...sortedArray];

  const middleIndex = Math.round(items.length / 2) - 1;
  const middleValue = items[middleIndex];

  if (toFind < middleValue) {
    items = items.slice(0, middleIndex);
  } else if (toFind > middleValue) {
    items = items.slice(middleIndex + 1, items.length);
  } else if (middleValue === toFind) {
    return true;
  } else {
    return false;
  }

  return _binarySearch(items, toFind);
};

const { assert } = require("chai");

describe("Binary Search", () => {
  it("Should implement binary search", () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 0), false);
    assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 6), true);

    assert.equal(_binarySearch([1, 2, 3, 4, 5], 0), false);
    assert.equal(_binarySearch([1, 2, 3, 4, 5, 6], 6), true);
  });
});
