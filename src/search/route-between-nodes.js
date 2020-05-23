const { Graph, Node } = require("../structures/graph-my-take");

const stepsBetweenNodes = (start, destination) => {
  if (start.value === destination.value) return 1;

  const separator = "-separator-";
  const adjacentNodes = [
    ...start.adjacentNodes,
    ...destination.adjacentNodes,
    separator
  ];
  let level = 2;
  let nodesOnStep = new Map();

  while (adjacentNodes.length > 0) {
    const currentNode = adjacentNodes[0];

    if (currentNode === separator) {
      level++;
      adjacentNodes.push(separator);
    } else {
      if (nodesOnStep.has(currentNode.value)) {
        return level;
      }

      nodesOnStep.set(currentNode.value, 1);
      adjacentNodes.push(...currentNode.adjacentNodes);
    }

    adjacentNodes.splice(0, 1);
  }

  return 0;
};

const { assert } = require("chai");

describe("Route between nodes", () => {
  it("Should find the quickest route between nodes", () => {
    const b5 = new Node("b5");
    const b4 = new Node("b5", [b5]);
    const b3 = new Node("b3", [b4]);
    const quick = new Node("quick", [b4]);
    const b2 = new Node("b2", [b3]);
    const b1 = new Node("b1", [b2]);
    const b = new Node("b", [b1, quick]);
    const graph = new Graph([b]);

    //b - b1 - b2 - b3 - b4 - b5 = 6
    //b - quick - b4 - b5 = 4

    assert.equal(stepsBetweenNodes(b, b5), 4);
  });
});
