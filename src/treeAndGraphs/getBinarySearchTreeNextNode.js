//           5
//      2         8
//    1   3     7   9
//            6      10

class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
    this.parent = undefined;
  }
}

// is parent empty?
//  return current next
// is current on parent.next?
//  return current next
// else
//  return parent

const getBinarySearchTreeNextNode = (node) => {
  if (!(node instanceof Node)) {
    return undefined;
  }

  const parent = node.parent;

  if (!parent || parent.right === node) {
    let next = node.right;
    while (next && next.left) {
      next = next.left;
    }

    return next;
  }

  return parent;
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
  node2.parent = node5;
  node8.parent = node5;

  node2.left = node1;
  node2.right = node3;
  node1.parent = node2;
  node3.parent = node2;

  node8.left = node7;
  node8.right = node9;
  node7.parent = node8;
  node9.parent = node8;

  node7.left = node6;
  node6.parent = node7;

  node9.right = node10;
  node10.parent = node9;

  return node5;
};

describe("Tree", () => {
  beforeEach(prepareGraph);

  it("Should get next item", () => {
    const root = prepareGraph();
    assert.equal(getBinarySearchTreeNextNode(root).value, 6);
    assert.equal(getBinarySearchTreeNextNode(root.right).value, 9);
    assert.equal(getBinarySearchTreeNextNode(root.right.left).value, 8);
  });

  it("should return undefined when it is empty", () => {
    assert.isUndefined(getBinarySearchTreeNextNode({}), undefined);
  });

  it("Should undefined when it is the last node", () => {
    const root = prepareGraph();
    assert.equal(
      getBinarySearchTreeNextNode(root.right.right.right),
      undefined
    );
  });
});

module.exports = {
  getBinarySearchTreeNextNode,
};
