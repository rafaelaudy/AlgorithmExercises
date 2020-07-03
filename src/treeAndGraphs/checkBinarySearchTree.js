// Check binary search tree

// ok
//           5
//      2         8
//    1   3     7   9
//            6      10

// bad
//           5
//      2         8
//    1   3     7   9
//            6      10
//              11

// add to queue
// for each node queues
//   is left bigger than current or is right smaller than current
//      return false
//   add left and right to queue

class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

const checkBinarySearchTree = (node) => {
  const nodeQueue = [node];

  while (nodeQueue.length) {
    const current = nodeQueue.pop();
    if (
      (current.left && current.left.value >= current.value) ||
      (current.right && current.right.value <= current.value)
    ) {
      return false;
    }

    if (current.left) nodeQueue.push(current.left);
    if (current.right) nodeQueue.push(current.right);
  }

  return true;
};

const { assert } = require("chai");

const prepareGraph = () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const node8 = new Node(8);
  const node9 = new Node(9);
  const node10 = new Node(10);

  node5.left = node2;
  node5.right = node8;
  node2.left = node1;
  node2.right = node3;
  node8.left = node7;
  node8.right = node9;
  node7.left = node6;
  node9.right = node10;

  return node5;
};

describe("Tree", () => {
  beforeEach(prepareGraph);

  it("Should do checkBinarySearchTree", () => {
    assert.isTrue(checkBinarySearchTree(prepareGraph()));
  });

  // it("Should return false if semi balanced", () => {
  //   const node5 = prepareGraph();
  //   node5.right.right.right.left = new Node(1);
  //   assert.isFalse(checkBinarySearchTree(node5));
  // });

  it("Should return false if not balanced", () => {
    const node5 = prepareGraph();
    node5.right.right.right.left = new Node(20);
    assert.isFalse(checkBinarySearchTree(node5));
  });
});

module.exports = {
  checkBinarySearchTree,
};
