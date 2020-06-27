class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }
}

// traverse (node)
// undefined -> return

// if node.left
//  traverse (node.left)
// console.log(node.value)
// if node.right
//  traverse (node.right)

const inOrderTraversal = (node, inOrderValues = []) => {
  if (node) {
    inOrderTraversal(node.left, inOrderValues);
    inOrderValues.push(node.value);
    inOrderTraversal(node.right, inOrderValues);
  }

  return inOrderValues;
};

const preOrderTraversal = (node, preOrderValues = []) => {
  if (node) {
    preOrderValues.push(node.value);
    preOrderTraversal(node.left, preOrderValues);
    preOrderTraversal(node.right, preOrderValues);
  }

  return preOrderValues;
};
const postOrderTraversal = (node, postOrderValues = []) => {
  if (node) {
    postOrderTraversal(node.left, postOrderValues);
    postOrderTraversal(node.right, postOrderValues);
    postOrderValues.push(node.value);
  }

  return postOrderValues;
};

const { assert } = require("chai");

//      d
//   b    f
//  a c  e  g

const prepareTree = () => {
  const a = new TreeNode("a");
  const b = new TreeNode("b");
  const c = new TreeNode("c");
  const d = new TreeNode("d");
  const e = new TreeNode("e");
  const f = new TreeNode("f");
  const g = new TreeNode("g");

  d.addLeft(b);
  d.addRight(f);

  b.addLeft(a);
  b.addRight(c);

  f.addLeft(e);
  f.addRight(g);

  return d;
};

describe("Tree", () => {
  it("Should do inOrderTraversal", () => {
    const inOrderTraversalResult = ["a", "b", "c", "d", "e", "f", "g"];
    const tree = prepareTree();
    assert.deepEqual(inOrderTraversal(tree), inOrderTraversalResult);
  });

  it("Should do preOrderTraversal", () => {
    const preOrderTraversalResult = ["d", "b", "a", "c", "f", "e", "g"];
    const tree = prepareTree();
    assert.deepEqual(preOrderTraversal(tree), preOrderTraversalResult);
  });

  it("Should do postOrderTraversal", () => {
    const postOrderTraversalResult = ["a", "c", "b", "e", "g", "f", "d"];
    const tree = prepareTree();
    assert.deepEqual(postOrderTraversal(tree), postOrderTraversalResult);
  });
});

module.exports = {
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
};
