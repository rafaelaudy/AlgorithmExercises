const LinkedList = require("../structures/double-linked-list");

const midpoint = chain => {
  let middle = chain.head;
  let last = chain.head.prev.prev;

  while (middle && last) {
    middle = middle.prev;
    last = last.prev && last.prev.prev;
  }

  return middle;
};

const { assert } = require("chai");

describe("Midpoint of Linked List", () => {
  it("Should return midpoint of linked list", () => {
    let chain = new LinkedList();
    chain.addToHead(1);
    chain.addToHead(2);
    chain.addToHead(3);
    chain.addToHead(4);
    chain.addToHead(5);
    assert.equal(midpoint(chain).value, 3);

    chain = new LinkedList();
    chain.addToHead(1);
    chain.addToHead(2);
    chain.addToHead(3);
    chain.addToHead(4);
    assert.equal(midpoint(chain).value, 3);
  });
});
