const Node = require("../structures/tree-my-take");

const treeWidths = node => {
  if (!node || !node.children) return [0];

  const widtch = [1];

  const getChildren = nodes => {
    if (nodes.length < 1) return;

    let nextLevelNodes = [];
    nodes.map(current => {
      nextLevelNodes = current.children
        ? [...nextLevelNodes, ...current.children]
        : nextLevelNodes;
    });

    widtch.push(nodes.length);
    getChildren(nextLevelNodes);
  };

  getChildren(node.children);

  return widtch;
};

const { assert } = require("chai");

describe("Width of Tree Levels", () => {
  it("Should return width of each tree level", () => {
    const root = new Node(1);
    root.add(2);
    root.add(3);
    root.children[1].add(4);
    assert.deepEqual(treeWidths(root), [1, 2, 1]);
  });
});
