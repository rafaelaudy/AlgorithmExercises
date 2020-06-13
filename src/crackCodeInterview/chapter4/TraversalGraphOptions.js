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

const depthFirstTraversal = () => {};

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
  graph.addRootNode(f);

  return graph;
};

describe("Graph", () => {
  it("Should do depthFirstTraversal", () => {
    const depthFirstTraversalResult = ["a", "b", "c", "d", "e", "f", "g"];
    const graph = prepareGraph();
    // assert.deepEqual(depthFirstTraversal(graph), depthFirstTraversalResult);
  });

  it("Should do breathFirstTraversal", () => {
    const breathFirstTraversalResult = ["d", "b", "a", "c", "f", "e", "g"];
    const graph = prepareGraph();
    // assert.deepEqual(breathFirstTraversal(graph), breathFirstTraversalResult);
  });
});

module.exports = {
  depthFirstTraversal,
  breathFirstTraversal,
};
