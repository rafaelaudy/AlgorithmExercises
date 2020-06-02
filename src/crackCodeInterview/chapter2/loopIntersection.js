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

  // n1 n2 n3 n4 n5 n3
  // 3  1  2  2  1  2

  // iterate over
  //    check hash by value
  //    yes
  //        iterate over values there if it finds return
  //    add to hash by value

  getLoopNode() {
    if (!this.head || !this.head.next) {
      return undefined;
    }

    const hash = {};
    let current = this.head;

    while (current) {
      const hashAtValue = hash[current.value];

      if (hashAtValue) {
        const loopFound = hashAtValue.some((node) => node === current);
        if (loopFound) {
          return current;
        }
      }

      hash[current.value] = hashAtValue ? hashAtValue.push(current) : [current];
      current = current.next;
    }

    return false;
  }
}

const { assert } = require("chai");

describe("getLoopNode", () => {
  it("Should check getLoopNode", () => {
    const list = new LinkedList();
    list.addToTail("1");
    list.addToTail("2");
    list.addToTail("3");
    list.addToTail("4");
    assert.equal(list.getLoopNode(), false);

    list.tail.next = list.head.next;
    // 1 2 3 4 -> 2 3 4 -> 2
    assert.equal(list.getLoopNode(), list.head.next);
  });
});

module.exports = LinkedList;
