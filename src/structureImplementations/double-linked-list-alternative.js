class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  addToHead(value) {
    const newHead = new Node(value);

    if (this.head) {
      newHead.prev = this.head;
      this.head.next = newHead;
      this.head = newHead;
    } else {
      this.tail = newHead;
      this.head = newHead;
    }
  }

  removeHead() {
    if (this.head !== undefined) {
      const removedValue = this.head.value;
      if (this.head.prev) {
        const newHead = this.head.prev;
        newHead.next = undefined;
        this.head = newHead;
      } else {
        this.head = undefined;
        this.tail = undefined;
      }
      return removedValue;
    }
  }

  addToTail(value) {
    const newTail = new Node(value);

    if (this.tail) {
      newTail.next = this.tail;
      this.tail.prev = newTail;
      this.tail = newTail;
    } else {
      this.tail = newTail;
      this.head = newTail;
    }
  }

  removeTail() {
    if (this.tail !== undefined) {
      const removedValue = this.tail.value;

      if (this.tail.next) {
        const newTail = this.tail.next;
        newTail.prev = undefined;
        this.tail = newTail;
      } else {
        this.tail = undefined;
        this.head = undefined;
      }

      return removedValue;
    }
  }

  search(index) {
    let currentNode = this.tail;
    for (let i = 0; i < index - 1; i++) {
      if (currentNode === undefined) {
        return null;
      }

      currentNode = currentNode.next;
    }

    return currentNode ? currentNode.value : null;
  }

  indexOf(value) {
    let currentNode = this.tail;
    let index = 0;
    let findedOn = [];
    while (currentNode) {
      if (currentNode.value === value) {
        findedOn.push(index);
      }

      index++;
      currentNode = currentNode.next;
    }

    return findedOn;
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
