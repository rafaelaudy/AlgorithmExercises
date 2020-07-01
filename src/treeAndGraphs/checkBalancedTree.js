// Check balanced

// ok
//           a
//      b         e
//    c.  d     f   g
//            h.      i

// bad
//           a
//      b         e
//    c.  d     f   g
//            h.      i
//          j.

// for each node queues
//   check if it is leaf
//     save to hash the level
//     if has.keys > 2 return false
//   add child to nodeQueue

class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

const checkBalanced = (node) => {
  const nodeQueue = [{ node, level: 0 }];
  const levelHash = {};

  while (nodeQueue.length) {
    const current = nodeQueue.pop();
    if (!current.node.left && !current.node.right) {
      levelHash[current.level] = true;
    }

    if (Object.keys(levelHash).length > 2) {
      return false;
    }

    if (current.node.left) {
      nodeQueue.unshift({ node: current.node.left, level: current.level + 1 });
    }

    if (current.node.right) {
      nodeQueue.unshift({ node: current.node.right, level: current.level + 1 });
    }
  }

  return true;
};

const { assert } = require("chai");

const prepareGraph = () => {
  const nodeA = new Node("A");
  const nodeB = new Node("B");
  const nodeC = new Node("C");
  const nodeD = new Node("D");
  const nodeE = new Node("E");
  const nodeF = new Node("F");
  const nodeG = new Node("G");
  const nodeH = new Node("H");
  const nodeI = new Node("I");

  nodeA.left = nodeB;
  nodeA.right = nodeE;
  nodeB.left = nodeC;
  nodeB.right = nodeD;
  nodeE.left = nodeF;
  nodeE.right = nodeG;
  nodeF.left = nodeH;
  nodeG.right = nodeI;

  return nodeA;
};

describe("Tree", () => {
  beforeEach(prepareGraph);

  it("Should do checkBalancedTree", () => {
    assert.isTrue(checkBalanced(prepareGraph()));
  });

  it("Should return false if not balanced", () => {
    const a = prepareGraph();
    a.right.right.right.left = new Node("J");
    assert.isFalse(checkBalanced(a));
  });
});

module.exports = {
  checkBalanced,
};
