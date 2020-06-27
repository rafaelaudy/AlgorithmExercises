class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const node = new Node(value, null, this.head);
    if (this.head) this.head.next = node;
    else this.tail = node;
    this.head = node;
  }

  addToTail(value) {
    const node = new Node(value, this.tail, null);
    if (this.tail) this.tail.prev = node;
    else this.head = node;
    this.tail = node;
  }

  removeHead() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.prev;
    if (this.head) this.head.next = null;
    else this.tail = null;
    return value;
  }

  removeTail() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.next;
    if (this.tail) this.tail.prev = null;
    else this.head = null;
    return value;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return value;
      current = current.prev;
    }
    return null;
  }

  indexOf(value) {
    const indexes = [];
    let current = this.tail;
    let index = 0;
    while (current) {
      if (current.value === value) indexes.push(index);
      current = current.next;
      index++;
    }
    return indexes;
  }
}

const { assert } = require("chai");

describe("Linked List", () => {
  it("Should add to head", () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next, null);
    assert.equal(list.head.prev.prev.value, 1);
    assert.equal(list.tail.next.next.value, 3);
  });

  it("Should add to tail", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.value, 3);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next, null);
    assert.equal(list.head.prev.prev.value, 3);
    assert.equal(list.tail.next.next.value, 1);
  });

  it("Should remove head", () => {
    const list = new LinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    assert.equal(list.removeHead(), 3);
    assert.equal(list.head.value, 2);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.head.prev.value, 1);
    assert.equal(list.head.next, null);
    assert.equal(list.removeHead(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, null);
    assert.equal(list.head.prev, null);
    assert.equal(list.head.next, null);
    assert.equal(list.removeHead(), 1);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
  });

  it("Should remove tail", () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    assert.equal(list.removeTail(), 3);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 2);
    assert.equal(list.tail.next.value, 1);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.tail.prev, null);
    assert.equal(list.removeTail(), 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, null);
    assert.equal(list.head.prev, null);
    assert.equal(list.tail.prev, null);
    assert.equal(list.removeTail(), 1);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
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
    assert.deepEqual(list.indexOf(2), [3]);
    assert.deepEqual(list.indexOf(3), [1, 2]);
    assert.deepEqual(list.indexOf(4), []);
  });
});

module.exports = LinkedList;
