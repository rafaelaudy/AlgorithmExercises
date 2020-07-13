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

// is current on parent.next?
//  return current next
// else
//  return parent
const getBinarySearchTreeNextNode = (node) => {};

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

  it("Should get next item", () => {});

  it("should return undefined when it is empty", () => {});

  it("Should undefined when it is the last node", () => {});
});

module.exports = {
  getBinarySearchTreeNextNode,
};
