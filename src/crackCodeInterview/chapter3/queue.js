class Node {
  constructor(value) {
    this.value = value;
  }
}

class Queue {
  constructor() {
    const first = undefined;
    const last = undefined;
  }

  remove() {
    if (!this.last) {
      return undefined;
    }

    const last = this.last;
    this.last = last.prev;
    return last.value;
  }

  add(value) {
    const newValue = new Node(value);

    if (!this.first) {
      this.first = newValue;
    }

    newValue.prev = this.last;
    this.last = newValue;
  }

  peek() {
    return this.last.value;
  }

  isEmpty() {
    return !this.last;
  }
}

const { assert } = require("chai");

describe("Queue", () => {
  it("Should add", () => {
    const queue = new Queue();
    queue.add(1);
    assert.equal(queue.peek(), 1);
    queue.add(2);
    assert.equal(queue.peek(), 2);
    queue.add(3);
    assert.equal(queue.peek(), 3);
  });
  it("Should remove", () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    assert.equal(queue.remove(), 3);
    assert.equal(queue.remove(), 2);
    assert.equal(queue.remove(), 1);
  });
  it("Should peek", () => {
    const queue = new Queue();
    queue.add(1);
    assert.equal(queue.peek(), 1);
    queue.add(2);
    assert.equal(queue.peek(), 2);
    assert.equal(queue.peek(), 2);
    queue.add(3);
    assert.equal(queue.peek(), 3);
  });
  it("Should isEmpty", () => {
    const queue = new Queue();
    assert.equal(queue.isEmpty(), true);
    queue.add(1);
    assert.equal(queue.isEmpty(), false);
    queue.remove();
    assert.equal(queue.isEmpty(), true);
  });
});

module.exports = Queue;
