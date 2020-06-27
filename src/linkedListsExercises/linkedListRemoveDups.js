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

  // 1 1 2 3 4 2 5 5

  // iterate over nodes
  //  if value exists on hash
  //    current.prev.next = current.next
  //    if current.next
  //      current.next.prev = current.prev
  //    add to duplicates
  //  add value to hash
  // return duplicates

  removeDuplicates() {
    let current = this.head;
    let duplicates = [];
    let hash = {};
    while (current) {
      if (hash[current.value]) {
        duplicates.push(current.value);

        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        }
      }

      hash[current.value] = 1;
      current = current.next;
    }
    return duplicates;
  }
}

const { assert } = require("chai");

describe("Remove dups", () => {
  it("Should remove duplicates", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(3);
    list.addToTail(2);
    list.addToTail(2);
    list.addToTail(5);
    list.addToTail(5);
    assert.deepEqual(list.removeDuplicates(), [3, 2, 2, 5]);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.head.next.next.value, 3);
    assert.equal(list.head.next.next.next.value, 5);
  });
});

module.exports = LinkedList;
