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

// for each node
// check in hash
//    return
// add to hash
// add to results
// add all childreen to array
// call

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
//      g -> h

const breathFirstTraversal = (
  nodes,
  traversedHash = {},
  traversedResult = []
) => {
  if (!nodes.length) {
    return;
  }

  let nextIterationNodes = [];
  nodes.map((node) => {
    const value = node.value;
    if (traversedHash[value]) {
      return;
    }

    traversedHash[value] = 1;
    traversedResult.push(value);

    if (node.childreen) {
      nextIterationNodes = [...nextIterationNodes, ...node.childreen];
    }
  });

  breathFirstTraversal(nextIterationNodes, traversedHash, traversedResult);
  return traversedResult;
};

const { assert } = require("chai");

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
//      g -> h

const prepareGraph = () => {
  const graph = new Graph();
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

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

  g.addChild(h);

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
//      g -> h

describe("Graph", () => {
  it("Should do depthFirstTraversal", () => {
    const depthFirstTraversalResult = ["a", "b", "d", "c", "e", "g", "h", "f"];
    const graph = prepareGraph();
    assert.deepEqual(
      depthFirstTraversal(graph.rootNodes),
      depthFirstTraversalResult
    );
  });

  it("Should do breathFirstTraversal", () => {
    const breathFirstTraversalResult = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const graph = prepareGraph();
    assert.deepEqual(
      breathFirstTraversal(graph.rootNodes),
      breathFirstTraversalResult
    );
  });
});

module.exports = {
  depthFirstTraversal,
  breathFirstTraversal,
};
