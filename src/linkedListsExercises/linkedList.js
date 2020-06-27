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

  addToHead(value) {
    const newHead = new Node(value);
    if (this.head) {
      const oldHead = this.head;
      newHead.next = oldHead;
      oldHead.prev = newHead;
      this.head = newHead;
    } else {
      this.head = newHead;
      this.tail = newHead;
    }
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

  removeHead() {
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = undefined;
    } else {
      this.tail = undefined;
    }
    return value;
  }

  removeTail() {
    if (!this.tail) {
      return undefined;
    }

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = undefined;
    } else {
      this.head = undefined;
    }
    return value;
  }

  search(value) {
    let current = this.head;
    while (current !== undefined && current.value !== value) {
      current = current.next;
    }
    return current && current.value;
  }

  indexOf(value) {
    let index = 0;
    let foundAt = [];
    let current = this.head;

    while (current !== undefined) {
      if (current.value === value) {
        foundAt.push(index);
      }

      index++;
      current = current.next;
    }
    return foundAt;
  }
}

const { assert } = require("chai");

describe("Linked List", () => {
  it("Should add to head", () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.tail.prev.value, 2);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, undefined);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.tail.prev.prev.value, 3);
    assert.equal(list.head.next.next.value, 1);
  });

  it("Should add to tail", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.tail.next, undefined);
    assert.equal(list.tail.value, 3);
    assert.equal(list.tail.prev.value, 2);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.head.next.next.value, 3);
    assert.equal(list.tail.prev.prev.value, 1);
  });

  it("Should remove head", () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.removeHead(), 3);
    assert.equal(list.head.value, 2);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.prev.value, 2);
    assert.equal(list.head.next.value, 1);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.removeHead(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, undefined);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.head.next, undefined);
    assert.equal(list.removeHead(), 1);
    assert.equal(list.head, undefined);
    assert.equal(list.tail, undefined);
  });

  it("Should remove tail", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.removeTail(), 3);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 2);
    assert.equal(list.tail.prev.value, 1);
    assert.equal(list.head.next.value, 2);
    assert.equal(list.tail.next, undefined);
    assert.equal(list.removeTail(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, undefined);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.head.next, undefined);
    assert.equal(list.tail.prev, undefined);
    assert.equal(list.removeTail(), 1);
    assert.equal(list.head, undefined);
    assert.equal(list.tail, undefined);
  });

  it("Should search for value", () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.search(1), 1);
    assert.equal(list.search(2), 2);
    assert.equal(list.search(3), 3);
    assert.equal(list.search(4), null);
  });

  it("Should search for indexes of value", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(3);
    list.addToTail(1);
    assert.deepEqual(list.indexOf(1), [0, 4]);
    assert.deepEqual(list.indexOf(2), [1]);
    assert.deepEqual(list.indexOf(3), [2, 3]);
    assert.deepEqual(list.indexOf(4), []);
  });
});

module.exports = LinkedList;
