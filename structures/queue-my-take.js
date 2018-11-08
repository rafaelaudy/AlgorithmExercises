class Queue {
  constructor(...queue) {
    this.queue = [...queue];
    this.reverse = false;
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items);
  }

  dequeue() {
    return this.reverse ? this.queue.shift() : this.queue.pop();
  }
}

const { assert } = require("chai");

describe("Queues", () => {
  it("Should enqueue items to the left", () => {
    const queue = new Queue(4, 5);
    assert.equal(queue.enqueue(1, 2, 3), 5);
    assert.deepEqual(queue.queue, [1, 2, 3, 4, 5]);
  });

  it("Should enqueue items to the right", () => {
    const queue = new Queue(4, 5);
    queue.reverse = true;
    assert.equal(queue.enqueue(1, 2, 3), 5);
    assert.deepEqual(queue.queue, [4, 5, 1, 2, 3]);
  });

  it("Should dequeue item from the right", () => {
    const queue = new Queue(1, 2, 3);
    assert.equal(queue.dequeue(), 3);
  });

  it("Should dequeue item from the left", () => {
    const queue = new Queue(1, 2, 3);
    queue.reverse = true;
    assert.equal(queue.dequeue(), 1);
  });
});

module.exports = Queue;
