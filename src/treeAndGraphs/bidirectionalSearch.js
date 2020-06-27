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

const dive1Level = (
  currentSideQueue,
  pathCurrentSide,
  pathFromOppositeSideHash,
  isFromA
) => {
  if (currentSideQueue.length === 0) {
    return;
  }
  const current = currentSideQueue.pop();
  const visitedValues = Object.keys(pathFromOppositeSideHash);
  if (visitedValues.includes(current.value)) {
    const leftPath = isFromA
      ? pathCurrentSide[current.value]
      : pathFromOppositeSideHash[current.value];
    const rightPath = isFromA
      ? pathFromOppositeSideHash[current.value]
      : pathCurrentSide[current.value];
    rightPath.pop();
    return [...leftPath, ...rightPath.reverse()];
  }

  current.adjacents.map((adjacent) => {
    if (pathCurrentSide[adjacent.value]) {
      return;
    }

    pathCurrentSide[adjacent.value] = [
      ...pathCurrentSide[current.value],
      adjacent,
    ];

    currentSideQueue.unshift(adjacent);
  });

  return;
};

const bidirectionalSearch = (nodeA, nodeB) => {
  const queueA = [nodeA];
  const queueB = [nodeB];
  const pathFromAHash = {};
  const pathFromBHash = {};
  pathFromAHash[nodeA.value] = [nodeA];
  pathFromBHash[nodeB.value] = [nodeB];
  let foundPath;

  while (queueA.length || queueB.length) {
    foundPath = dive1Level(queueA, pathFromAHash, pathFromBHash, true);
    if (foundPath) {
      return foundPath;
    }

    foundPath = dive1Level(queueB, pathFromBHash, pathFromAHash, false);
    if (foundPath) {
      return foundPath;
    }
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

  it("Should do bidirectionalSearch", () => {
    let bidirectionalSearchResult = ["a", "e", "g", "h", "i"];
    assert.deepEqual(
      bidirectionalSearch(a, i).map((node) => node.value),
      bidirectionalSearchResult
    );
    bidirectionalSearchResult = ["a", "h", "i"];
    a.addAdjacent(h);
    assert.deepEqual(
      bidirectionalSearch(a, i).map((node) => node.value),
      bidirectionalSearchResult
    );
  });

  it("Should return undefined if no bidirectionalSearch", () => {
    assert.isUndefined(bidirectionalSearch(a, f));
  });
});

module.exports = {
  bidirectionalSearch,
};
