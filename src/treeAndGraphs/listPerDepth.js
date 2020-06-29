class Node {
  constructor(value) {
    this.value = value;
  }
}

//              5
//     2                  8
//  1     3          6         9
//           4          7         10

// [[5], [2, 8], [1, 3, 6, 9], [4, 7, 10]]

const listPerDepth = (node) => {
  const nodeQueue = [{ node: node, level: 0 }];
  const result = [];

  while (nodeQueue.length) {
    const current = nodeQueue.pop();
    if (result[current.level]) {
      result[current.level].push(current.node.value);
    } else {
      result[current.level] = [current.node.value];
    }

    if (current.node.left)
      nodeQueue.unshift({ node: current.node.left, level: current.level + 1 });
    if (current.node.right)
      nodeQueue.unshift({ node: current.node.right, level: current.level + 1 });
  }

  return result;
};

const listPerDepthRecursive = (node, level = 0, agg = []) => {
  if (!node) return;

  if (agg[level]) {
    agg[level].push(node.value);
  } else {
    agg[level] = [node.value];
  }

  listPerDepthRecursive(node.left, level + 1, agg);
  listPerDepthRecursive(node.right, level + 1, agg);

  return agg;
};

const prepareTree = () => {
  const root = new Node(5);
  root.left = new Node(2);
  root.right = new Node(8);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  root.left.right.right = new Node(4);
  root.right.left = new Node(6);
  root.right.right = new Node(9);
  root.right.left.right = new Node(7);
  root.right.right.right = new Node(10);
  return root;
};

const { assert } = require("chai");

describe("listPerDepth", () => {
  it("Should get one array per level of the tree", () => {
    const result = listPerDepth(prepareTree());
    assert.deepEqual(result[0], [5]);
    assert.deepEqual(result[1], [2, 8]);
    assert.deepEqual(result[2], [1, 3, 6, 9]);
    assert.deepEqual(result[3], [4, 7, 10]);
  });

  it("Should get one array per level of the tree (recursive)", () => {
    const result = listPerDepthRecursive(prepareTree());
    assert.deepEqual(result[0], [5]);
    assert.deepEqual(result[1], [2, 8]);
    assert.deepEqual(result[2], [1, 3, 6, 9]);
    assert.deepEqual(result[3], [4, 7, 10]);
  });
});

module.exports = {
  listPerDepth,
};
