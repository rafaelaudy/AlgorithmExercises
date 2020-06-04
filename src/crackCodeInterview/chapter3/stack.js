class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = undefined;
  }

  pop() {
    const top = this.top;
    if (!top) return undefined;
    this.top = top.prev;
    return top.value;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.prev = this.top;
    this.top = newNode;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

const { assert } = require("chai");

describe("Stack", () => {
  it("Should pop", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.equal(stack.pop(), 3);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 1);
  });
  it("Should push", () => {
    const stack = new Stack();
    stack.push(1);
    assert.equal(stack.peek(), 1);
    stack.push(2);
    assert.equal(stack.peek(), 2);
    stack.push(3);
    assert.equal(stack.peek(), 3);
  });
  it("Should peek", () => {
    const stack = new Stack();
    stack.push(1);
    assert.equal(stack.peek(), 1);
    stack.push(2);
    assert.equal(stack.peek(), 2);
    assert.equal(stack.peek(), 2);
    stack.push(3);
    assert.equal(stack.peek(), 3);
  });
  it("Should isEmpty", () => {
    const stack = new Stack();
    assert.equal(stack.isEmpty(), true);
    stack.push(1);
    assert.equal(stack.isEmpty(), false);
    stack.pop();
    assert.equal(stack.isEmpty(), true);
  });
});

module.exports = Stack;
