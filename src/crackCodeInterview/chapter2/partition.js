class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  addToTail(value) {
    const newTail = new Node(value);
    if (this.head) {
      const oldTail = this.tail;
      newTail.prev = oldTail;
      oldTail.next = newTail;
      this.tail = newTail;
    } else {
      this.head = newTail;
      this.tail = newTail;
    }
  }

  partition() {}
}

const { assert } = require("chai");

describe("partition", () => {
  it("Should check partition", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);
    list.addToTail(7);
    list.addToTail(8);
    assert.equal(list.partition(4), 4);
    assert.equal(list.partition(10), undefined);
    assert.equal(list.partition(0), 8);
    assert.equal(list.partition(1), 7);
  });
});

module.exports = LinkedList;
