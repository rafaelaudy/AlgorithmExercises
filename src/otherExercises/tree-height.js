const Node = require("../structureImplementations/tree");

const treeHeights = (node, depth = 1, heights = []) => {
  if (node.children.length > 0)
    node.children.map((child) => {
      treeHeights(child, depth + 1, heights);
    });
  else heights.push(depth);

  return heights;
};

const { assert } = require("chai");

describe("Height of Tree Levels", () => {
  it("Should return height of each tree level", () => {
    const root = new Node(1);
    root.add(2);
    root.add(3);
    root.children[1].add(4);
    assert.deepEqual(treeHeights(root), [2, 3]);

    //     1
    //   2   3
    //          4
  });
});
