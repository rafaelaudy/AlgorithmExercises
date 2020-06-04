class Stack {
  constructor() {
    this.top = {
      1: -3,
      2: -2,
      3: -1,
    };
    this.stack = [];
  }

  // Check stack number between 1 & 3
  // Check top is -1 return undefined

  // get on top
  // update top for that number

  pop(stackNumber) {
    if (stackNumber > 3 || stackNumber < 1) {
      throw new Error("Stack number must be between 1 and 3");
    }

    if (this.top[stackNumber] === -1) return undefined;

    const value = this.stack[this.top[stackNumber]];
    this.top[stackNumber] = this.top[stackNumber] - 3;
    return value;
  }

  // Check stack number between 1 & 3
  // Set at current top + stack number
  // update top for that number

  push(stackNumber, value) {
    if (stackNumber > 3 || stackNumber < 1) {
      throw new Error("Stack number must be between 1 and 3");
    }

    const newTop = this.top[stackNumber] + 3;
    this.stack[newTop] = value;
    this.top[stackNumber] = newTop;
  }

  peek(stackNumber) {
    if (stackNumber > 3 || stackNumber < 1) {
      throw new Error("Stack number must be between 1 and 3");
    }

    return this.stack[this.top[stackNumber]];
  }
}

const { assert } = require("chai");

describe("3InOneStack", () => {
  it("Should push", () => {
    const stack = new Stack();
    stack.push(1, 1);
    stack.push(1, 2);
    stack.push(1, 3);
    stack.push(2, 5);
    stack.push(2, 6);
    stack.push(3, 7);
    assert.equal(stack.peek(1), 3);
    assert.equal(stack.peek(2), 6);
    assert.equal(stack.peek(3), 7);
  });
  it("Should push", () => {
    const stack = new Stack();
    stack.push(1, 1);
    stack.push(1, 2);
    stack.push(1, 3);
    stack.push(2, 5);
    stack.push(2, 6);
    stack.push(3, 7);
    assert.equal(stack.pop(1), 3);
    assert.equal(stack.pop(2), 6);
    assert.equal(stack.pop(1), 2);
    assert.equal(stack.pop(3), 7);
    assert.equal(stack.pop(2), 5);
  });
});

module.exports = Stack;
