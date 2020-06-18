class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }

  addAdjacent(node) {
    this.adjacent.push(node);
    node.adjacent.push(this);
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

// fromA

//
// for each adjacent
//    is fromB
//        return aPath + b
//    is in hashA
//        break
//    add to hashA with path
//    add children to next batchA

// for each adjacent
//    is in hashA?
//        return aPath + bPath
//    is in hashB
//        break
//    add to hashB with path
//    add children to next batchB

// fromB
const routeBetweenNodes = (nodeA, nodeb) => {};

const { assert } = require("chai");

// a -  b
//      e
//      f
//      i
// b -  d
//      e
// c -  b
// d -  c
//      e
// e -  g
// f -
//      g -  h
//              - j
// i -  h

// a - b - d - e - g - h - j
// a - e - g - h - j
// a - f - g - h - j
// a - i - h - j

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
  const i = new Node("i");

  graph.addRootNode(a);
  a.addAdjacent(b);
  a.addAdjacent(e);
  a.addAdjacent(f);
  a.addAdjacent(i);

  graph.addRootNode(b);
  b.addAdjacent(d);
  b.addAdjacent(e);

  graph.addRootNode(c);
  c.addAdjacent(b);

  graph.addRootNode(d);
  d.addAdjacent(c);
  d.addAdjacent(e);

  graph.addRootNode(e);
  e.addAdjacent(g);

  graph.addRootNode(f);

  g.addAdjacent(h);

  graph.addRootNode(i);
  i.addAdjacent(h);

  return graph;
};

describe("Graph", () => {
  it("Should do routeBetweenNodes", () => {
    // const routeBetweenNodesResult = ["a", "b", "d", "c", "e", "g", "h", "f"];
    // const graph = prepareGraph();
    // assert.deepEqual(
    //   routeBetweenNodes(graph.rootNodes),
    //   routeBetweenNodesResult
    // );
  });
});

module.exports = {
  routeBetweenNodes,
};
