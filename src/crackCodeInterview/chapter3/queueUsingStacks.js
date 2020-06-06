const Stack = require("./stack");

// Stack A
// 1
// 1 2
// 1 2 3

// Stack B

// --------------------------
// --------------------------
// --------------------------

// add
// Add to Stack A

// remove
// push everything to Stack B
// pop from stack B
// push everything to Stack A

// peek
// push everything to Stack B
// peek from stack B
// push everything to Stack A

class QueueUsingStacks {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  swappStacks(from, to) {
    let current = from.pop();
    while (current) {
      to.push(current);
      current = from.pop();
    }
  }

  add(value) {
    this.stackA.push(value);
  }

  remove() {
    this.swappStacks(this.stackA, this.stackB);
    const removed = this.stackB.pop();
    this.swappStacks(this.stackB, this.stackA);
    return removed;
  }

  peek() {
    this.swappStacks(this.stackA, this.stackB);
    const peeked = this.stackB.peek();
    this.swappStacks(this.stackB, this.stackA);
    return peeked;
  }

  isEmpty() {
    return !this.stackA.peek();
  }
}

const { assert } = require("chai");

describe("QueueUsingStacks", () => {
  it("Should add", () => {
    const queueUsingStacks = new QueueUsingStacks();
    queueUsingStacks.add(1);
    assert.equal(queueUsingStacks.peek(), 1);
    queueUsingStacks.add(2);
    queueUsingStacks.add(3);
    assert.equal(queueUsingStacks.peek(), 1);
  });
  it("Should remove", () => {
    const queueUsingStacks = new QueueUsingStacks();
    queueUsingStacks.add(1);
    queueUsingStacks.add(2);
    queueUsingStacks.add(3);
    assert.equal(queueUsingStacks.remove(), 1);
    assert.equal(queueUsingStacks.remove(), 2);
    assert.equal(queueUsingStacks.remove(), 3);
  });
  it("Should peek", () => {
    const queueUsingStacks = new QueueUsingStacks();
    queueUsingStacks.add(1);
    assert.equal(queueUsingStacks.peek(), 1);
    queueUsingStacks.add(2);
    queueUsingStacks.add(3);
    assert.equal(queueUsingStacks.peek(), 1);
  });
  it("Should isEmpty", () => {
    const queueUsingStacks = new QueueUsingStacks();
    assert.equal(queueUsingStacks.isEmpty(), true);
    queueUsingStacks.add(1);
    assert.equal(queueUsingStacks.isEmpty(), false);
    queueUsingStacks.remove();
    assert.equal(queueUsingStacks.isEmpty(), true);
  });
});

module.exports = QueueUsingStacks;
