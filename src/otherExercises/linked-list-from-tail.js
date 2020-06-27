const LinkedList = require("../structureImplementations/double-linked-list");

const moveToHeadBy = (node, moveBy) => {
  for (let index = 0; index < moveBy; index++) {
    node = node && node.prev;
    if (node === undefined) break;
  }

  return node;
};

const fromTail = (chain, fromTailNumber) => {
  let fromTailNode = chain.head;
  let lastNode = moveToHeadBy(fromTailNode, fromTailNumber);
  while (lastNode.prev) {
    lastNode = lastNode.prev;
    fromTailNode = fromTailNode.prev;
  }

  return fromTailNode;
};

const { assert } = require("chai");

describe("From Tail of Linked List", () => {
  it("Should step from tail of linked list", () => {
    const chain = new LinkedList();
    chain.addToHead(1);
    chain.addToHead(2);
    chain.addToHead(3);
    chain.addToHead(4);
    chain.addToHead(5);
    chain.addToHead(6);
    chain.addToHead(7);
    assert.equal(fromTail(chain, 2).value, 3);
  });
});
