const mergeSort = array => {
  if (array.length < 2) return array;

  const halfPoint = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, halfPoint);
  const lastHalf = array.slice(halfPoint, array.length);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedLastHalf = mergeSort(lastHalf);

  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (sortedFirstHalf.length === 0) {
      return result.concat(sortedLastHalf);
    } else if (sortedLastHalf.length === 0) {
      return result.concat(sortedFirstHalf);
    } else if (sortedFirstHalf[0] < sortedLastHalf[0]) {
      result.push(sortedFirstHalf.shift());
    } else {
      result.push(sortedLastHalf.shift());
    }
  }

  return result;
};

const { assert } = require("chai");

describe("Merge Sort", () => {
  it("Should implement merge sort", () => {
    assert.deepEqual(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
