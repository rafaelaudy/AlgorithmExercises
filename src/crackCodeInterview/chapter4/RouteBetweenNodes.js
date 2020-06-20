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

// queue nodeA

// while something on queue {
//    add to hash : parent hash + value
//    check if it is nodeB
//      break
//    dequeue
//    for each child
//      enqueue
// }

// return hash

const routeBetweenNodes = (nodeA, nodeB) => {
  const toVisitQueue = [];
  const pathHashMap = {};
  toVisitQueue.unshift(nodeA);
  pathHashMap[nodeA.value] = [nodeA];

  while (toVisitQueue.length > 0) {
    const current = toVisitQueue.pop();

    if (current.value === nodeB.value) {
      return pathHashMap[current.value];
    }

    current.adjacents.map((adjacent) => {
      const parentPath = pathHashMap[current.value];

      if (pathHashMap[adjacent.value]) return;

      toVisitQueue.unshift({ ...adjacent, parent: current });
      pathHashMap[adjacent.value] = [...parentPath, adjacent];
    });
  }
};

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

  it("Should do routeBetweenNodes", () => {
    let routeBetweenNodesResult = ["a", "e", "g", "h", "i"];
    assert.deepEqual(
      routeBetweenNodes(a, i).map((node) => node.value),
      routeBetweenNodesResult
    );

    routeBetweenNodesResult = ["a", "h", "i"];
    a.addAdjacent(h);
    assert.deepEqual(
      routeBetweenNodes(a, i).map((node) => node.value),
      routeBetweenNodesResult
    );
  });

  it("Should return undefined if no routeBetweenNodes", () => {
    assert.isUndefined(routeBetweenNodes(a, f));
  });
});

module.exports = {
  routeBetweenNodes,
};
