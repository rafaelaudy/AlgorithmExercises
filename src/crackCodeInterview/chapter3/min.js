// 5
// 5  4
// 5  4  6
// 5  4  6  3
// 5  4  6  3  2
// 5  4  6  3  2  2
// 5  4  6  3  2  2  1

// 5 -> 4 -> 4 -> 3 -> 2 -> 2 -> 1

// 5  4  6  3  2  2
// 5 -> 4 -> 4 -> 3 -> 2 -> 2
// 5  4  6  3  2
// 5 -> 4 -> 4 -> 3 -> 2
// 5  4  6  3
// 5 -> 4 -> 4 -> 3
// 5  4  6
// 5 -> 4 -> 4
// 5  4
// 5 -> 4

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = undefined;
    this.minValue = [];
  }

  pop() {
    this.minValue.pop();

    const top = this.top;
    if (!top) return undefined;
    this.top = top.prev;
    return top.value;
  }

  push(value) {
    const minValue = this.minValue[this.minValue.length - 1];
    if (!minValue || value < minValue) {
      this.minValue.push(value);
    } else {
      this.minValue.push(minValue);
    }

    const newNode = new Node(value);
    newNode.prev = this.top;
    this.top = newNode;
  }

  min() {
    return this.minValue[this.minValue.length - 1];
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
  it("Should min", () => {
    const stack = new Stack();
    stack.push(5);
    assert.equal(stack.min(), 5);
    stack.push(3);
    assert.equal(stack.min(), 3);
    stack.push(2);
    assert.equal(stack.min(), 2);
    stack.push(2);
    assert.equal(stack.min(), 2);
    stack.push(6);
    assert.equal(stack.min(), 2);
    stack.push(1);
    assert.equal(stack.min(), 1);
    stack.pop();
    assert.equal(stack.min(), 2);
    stack.pop();
    assert.equal(stack.min(), 2);
    stack.pop();
    stack.pop();
    assert.equal(stack.min(), 3);
  });
});

module.exports = Stack;
