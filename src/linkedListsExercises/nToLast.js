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

  // 1 2 3 4 5 6 7 8
  // 1 2 3

  // fast = this.head
  // current = this.head

  // iterate over N times
  //  if fast null return null
  //  fast = fast.next

  // while fast.next !== undefined
  //  current = current.next
  //  fast = fast.next

  // return current.value

  nToLast(nTo) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < nTo; i++) {
      if (fast === undefined) {
        return undefined;
      }

      fast = fast.next;
    }

    while (fast.next !== undefined) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow.value;
  }
}

const { assert } = require("chai");

describe("nToLast", () => {
  it("Should check nToLast", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);
    list.addToTail(7);
    list.addToTail(8);
    assert.equal(list.nToLast(4), 4);
    assert.equal(list.nToLast(10), undefined);
    assert.equal(list.nToLast(0), 8);
    assert.equal(list.nToLast(1), 7);
  });
});

module.exports = LinkedList;
