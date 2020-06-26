class Node {
  constructor(value) {
    this.value = value;
  }
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//              5
//     2                  8
//  1     3          6         9
//           4          7         10

// if length === 0
//    return

// get middleElement
// if parent
//    add to parent left or right

// this(arrayLeft, middleElement, isLeft)
// this(arrayRight, middleElement, isRight)

const toMinimalTree = (sortedArray, parent, isLeft) => {
  if (!Array.isArray(sortedArray)) {
    throw new Error("Not a valid array");
  }

  if (sortedArray.length === 0) {
    return;
  }

  const middleElementIndex =
    sortedArray.length % 2 === 0
      ? sortedArray.length / 2 - 1
      : (sortedArray.length - 1) / 2;
  const middleValue = sortedArray[middleElementIndex];
  const middleElement = new Node(middleValue);
  const leftArray = sortedArray.slice(0, middleElementIndex);
  const rightArray = sortedArray.slice(middleElementIndex + 1);

  if (parent) {
    if (isLeft) parent.left = middleElement;
    else parent.right = middleElement;
  }

  toMinimalTree(leftArray, middleElement, true);
  toMinimalTree(rightArray, middleElement, false);

  return middleElement;
};

const { assert } = require("chai");

describe("to minimal tree", () => {
  it("Should do map array to minimal tree", () => {
    let orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rootNode = toMinimalTree(orderedArray);
    assert.deepEqual(rootNode.value, 5);
    assert.deepEqual(rootNode.left.value, 2);
    assert.deepEqual(rootNode.right.value, 8);
    assert.deepEqual(rootNode.left.left.value, 1);
    assert.deepEqual(rootNode.left.right.value, 3);
    assert.deepEqual(rootNode.left.right.right.value, 4);
    assert.deepEqual(rootNode.right.left.value, 6);
    assert.deepEqual(rootNode.right.right.value, 9);
    assert.deepEqual(rootNode.right.left.right.value, 7);
    assert.deepEqual(rootNode.right.right.right.value, 10);
  });
});

module.exports = {
  toMinimalTree,
};
