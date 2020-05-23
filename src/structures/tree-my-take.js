class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value));
  }

  remove(value) {
    let indexOfNodeToBeRemoved = this.children.findIndex(node => {
      return node.data === value;
    });

    this.children = [
      ...this.children.slice(0, indexOfNodeToBeRemoved),
      ...this.children.slice(indexOfNodeToBeRemoved + 1)
    ];
  }
}

class Tree {
  traverseBF(callbackFunc) {
    let nodes = [this.root];

    while (nodes.length) {
      const [currentNode, ...otherNodes] = nodes;
      callbackFunc(currentNode);
      nodes = [...otherNodes, ...currentNode.children];
    }
  }

  traverseDF(callbackFunc, currentNode = this.root) {
    if (!currentNode) return;

    callbackFunc(currentNode);

    currentNode.children.map(child => {
      this.traverseDF(callbackFunc, child);
    });
  }
}

const { assert } = require("chai");

describe("Trees", () => {
  it("Should add and remove nodes", () => {
    const root = new Node(1);
    root.add(2);
    assert.equal(root.data, 1);
    assert.equal(root.children[0].data, 2);
    root.remove(2);
    assert.equal(root.children.length, 0);
  });
  it("Should traverse by breadth", () => {
    const tree = new Tree();
    tree.root = new Node(1);
    tree.root.add(2);
    tree.root.add(3);
    tree.root.children[0].add(4);
    const numbers = [];
    tree.traverseBF(node => numbers.push(node.data));
    assert.deepEqual(numbers, [1, 2, 3, 4]);
  });
  it("Should traverse by depth", () => {
    const tree = new Tree();
    tree.root = new Node(1);
    tree.root.add(2);
    tree.root.add(3);
    tree.root.children[0].add(4);
    const numbers = [];
    tree.traverseDF(node => numbers.push(node.data));
    assert.deepEqual(numbers, [1, 2, 4, 3]);
  });
});

module.exports = Node;
