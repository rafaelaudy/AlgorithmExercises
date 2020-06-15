class Node {
  constructor(value) {
    this.value = value;
    this.childreen = [];
  }

  addChild(node) {
    this.childreen.push(node);
  }
}

class Graph {
  constructor() {
    this.rootNodes = [];
  }

  addRootNode(node) {
    this.rootNodes.push(node);
  }
}

const depthFirstTraversal = (
  nodes,
  traversedHash = {},
  traversedResult = []
) => {
  nodes.map((node) => {
    const value = node.value;
    if (traversedHash[value]) {
      return;
    }

    traversedHash[value] = 1;
    traversedResult.push(value);

    depthFirstTraversal(node.childreen, traversedHash, traversedResult);
  });

  return traversedResult;
};

// for each children
// check hash

const breathFirstTraversal = () => {};

const { assert } = require("chai");

// a -> b
//      e
//      f
// b -> d
//      e
// c -> b
// d -> c
//      e
// e ->
// f ->

const prepareGraph = () => {
  const graph = new Graph();
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");

  graph.addRootNode(a);
  a.addChild(b);
  a.addChild(e);
  a.addChild(f);

  graph.addRootNode(b);
  b.addChild(d);
  b.addChild(e);

  graph.addRootNode(c);
  c.addChild(b);

  graph.addRootNode(d);
  d.addChild(c);
  d.addChild(e);

  graph.addRootNode(e);
  e.addChild(g);

  graph.addRootNode(f);

  return graph;
};

// a -> b
//      e
//      f
// b -> d
//      e
// c -> b
// d -> c
//      e
// e -> g
// f ->

describe("Graph", () => {
  it.only("Should do depthFirstTraversal", () => {
    const depthFirstTraversalResult = ["a", "b", "d", "c", "e", "g", "f"];
    const graph = prepareGraph();
    assert.deepEqual(
      depthFirstTraversal(graph.rootNodes),
      depthFirstTraversalResult
    );
  });

  // it("Should do breathFirstTraversal", () => {
  //   const breathFirstTraversalResult = ["d", "b", "a", "c", "f", "e", "g"];
  //   const graph = prepareGraph();
  //   assert.deepEqual(breathFirstTraversal(graph), breathFirstTraversalResult);
  // });
});

module.exports = {
  depthFirstTraversal,
  breathFirstTraversal,
};
