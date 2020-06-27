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

const _mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.round(array.length / 2);

  const left = _mergeSort(array.slice(0, middleIndex));
  const right = _mergeSort(array.slice(middleIndex));

  const jointArray = [];
  while (true) {
    if (left[0] <= right[0]) {
      jointArray.push(left.shift());
      if (left.length === 0) {
        jointArray.push(...right);
        break;
      }
    } else {
      jointArray.push(right.shift());
      if (right.length === 0) {
        jointArray.push(...left);
        break;
      }
    }
  }

  return jointArray;
};

const { assert } = require("chai");

describe("Merge Sort", () => {
  it("Should implement merge sort", () => {
    assert.deepEqual(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});
