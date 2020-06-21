class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents.push(node);
    node.adjacents.push(this);
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

// add a to queueA
// add a to pathHashA
// add b to queueb
// add b to pathHashB

// while(queueA || queueB)
//    currentA pop queueA
//    if(pathHashB[currentA])
//      pathHashB[currentA].shift();
//      return pathHashA[currentA] + pathHashB[currentA]
//    foreach Aadjacents
//      if(pathHashA[adjacent])
//        return
//      add to pathHashA
//      add to queueA

//    same for B

const bidirectionalSearch = (nodeA, nodeB) => {};

const { assert } = require("chai");

// a -  b
//      e
//      f
// b -  d
//      e
// c -  b
// d -  c
//      e
// e -  g
//      g -  h
//              - i
// f -

// a -> i

// a - b
//        d

// a - e
// a - f

let a, b, c, d, e, f, g, h, i;

const prepareGraph = () => {
  const graph = new Graph();
  a = new Node("a");
  b = new Node("b");
  c = new Node("c");
  d = new Node("d");
  e = new Node("e");
  f = new Node("f");
  g = new Node("g");
  h = new Node("h");
  i = new Node("i");

  graph.addRootNode(a);
  a.addAdjacent(b);
  a.addAdjacent(e);

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

  g.addAdjacent(h);
  h.addAdjacent(i);

  graph.addRootNode(f);

  return graph;
};

describe("Graph", () => {
  beforeEach(prepareGraph);

  it("Should do bidirectionalSearch", () => {
    // let bidirectionalSearchResult = ["a", "e", "g", "h", "i"];
    // assert.deepEqual(
    //   bidirectionalSearch(a, i).map((node) => node.value),
    //   bidirectionalSearchResult
    // );
    // bidirectionalSearchResult = ["a", "h", "i"];
    // a.addAdjacent(h);
    // assert.deepEqual(
    //   bidirectionalSearch(a, i).map((node) => node.value),
    //   bidirectionalSearchResult
    // );
  });

  it("Should return undefined if no bidirectionalSearch", () => {
    // assert.isUndefined(bidirectionalSearch(a, f));
  });
});

module.exports = {
  bidirectionalSearch,
};
