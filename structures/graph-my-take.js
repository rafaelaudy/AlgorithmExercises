class Node {
  constructor(value, adjacentNodes = []) {
    this.value = value;
    this.adjacentNodes = adjacentNodes;
  }
}

class Graph {
  constructor(rootNodes = []) {
    this.rootNodes = rootNodes;
  }

  addEdge(nodeA, nodeB) {
    nodeA.adjacentNodes.push(nodeB);
    nodeB.adjacentNodes.push(nodeA);
  }

  addRoot(node) {
    this.rootNodes.push(node);
  }
}

const { assert } = require("chai");

describe("Graph", () => {
  it("Should get root nodes", () => {
    const a = new Node("a");
    const b = new Node("b");
    const graph = new Graph([a, b]);
    assert.deepEqual(graph.rootNodes, [a, b]);
  });

  it("Should add root nodes", () => {
    const a = new Node("a");
    const b = new Node("b");
    const graph = new Graph([a]);
    graph.addRoot(b);
    assert.deepEqual(graph.rootNodes, [a, b]);
  });

  it("Should add edges", () => {
    const a = new Node("a");
    const b = new Node("b");
    const graph = new Graph([a]);
    graph.addEdge(a, b);
    assert.deepEqual(graph.rootNodes[0].adjacentNodes, [b]);
    assert.deepEqual(graph.rootNodes[0].adjacentNodes[0].adjacentNodes, [a]);
  });
});

module.exports = {
  Node,
  Graph
};
