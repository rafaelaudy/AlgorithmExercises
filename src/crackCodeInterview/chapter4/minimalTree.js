class Node {
  constructor(value) {
    this.value = value;
  }
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//              5
//     2                  8
//  1     3            7     9
//           4      6           10

// if length === 0
//    return

// get middleElement
// if parent
//    add to parent left or right

// this(arrayLeft, middleElement, isLeft)
// this(arrayRight, middleElement, isRight)

const minimalTree = (sortedArray, parent, isLeft) => {
  if (!Array.isArray(sortedArray)) {
    throw new Error("Not a valid array");
  }

  if (sortedArray.length === 0) {
    return;
  }

  const middleElementIndex =
    sortedArray.length % 2 === 0
      ? sortedArray.length / 2
      : sortedArray.length - 1 / 2;
  const middleValue = sortedArray[middleElementIndex];
  const middleElement = new Node(middleValue);
  const leftArray = sortedArray.slice(0, middleElementIndex);
  const rightArray = sortedArray.slice(middleElementIndex + 1);

  if (parent) {
    if (isLeft) parent.left = middleElement;
    else parent.right = middleElement;
  }

  minimalTree(leftArray, middleElement, true);
  minimalTree(rightArray, middleElement, false);

  return middleElement;
};

// const { assert } = require("chai");

// describe("minimal tree", () => {
//   beforeEach(prepareGraph);

//   it("Should do map array to minimal tree", () => {
//     let orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     assert.deepEqual(toMinimalTree(orderedArray), bidirectionalSearchResult);
//   });

//   it("Should return undefined if no bidirectionalSearch", () => {
//     assert.isUndefined(bidirectionalSearch(a, f));
//   });
// });

module.exports = {
  minimalTree,
};
