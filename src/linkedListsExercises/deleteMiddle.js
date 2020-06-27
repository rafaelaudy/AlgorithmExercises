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

  // 1 2 3 4 5 6
  // 0 1
  //   0   1
  //     0     1
  //       0
  //         0

  // 1 2 3 -
  // 0 1
  //   0   1

  // 1 2 3 4 - -
  // 0 1
  //   0   1
  //     0     1

  // if 0, 1 or 2 length skip

  // fast = this.head
  // current = this.head

  // while true
  //   if fast.next === nulll || fast === null
  //      check current value === value
  //          current.prev.next = current.next
  //          current.next.prev = current.prev
  //      return

  deleteMiddle(value) {
    if (
      this.head === undefined ||
      this.tail === this.head ||
      this.tail === this.head.next
    )
      return;

    let fast = this.head.next;
    let slow = this.head;

    while (true) {
      if (fast === undefined || fast.next === undefined) {
        if (slow.value === value) {
          slow.prev.next = slow.next;
          slow.next.prev = slow.prev;
        }

        if (fast === undefined) return;
      }

      slow = slow.next;
      fast = fast.next ? fast.next.next : undefined;
    }
  }
}

const { assert } = require("chai");

describe("deleteMiddle", () => {
  it("Should check deleteMiddle", () => {
    let list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);
    list.deleteMiddle(2);
    list.deleteMiddle(3);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.head.next.next.value, 4);

    list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.deleteMiddle(1);
    list.deleteMiddle(3);
    list.deleteMiddle(4);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.head.next.next.value, 4);

    list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.deleteMiddle(1);
    list.deleteMiddle(2);
    list.deleteMiddle(3);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next.value, 3);

    list = new LinkedList();
    list.addToTail(1);
    list.deleteMiddle(1);
    assert.equal(list.head.value, 1);
  });
});

module.exports = LinkedList;
