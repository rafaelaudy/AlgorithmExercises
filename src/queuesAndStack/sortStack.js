const Stack = require("./stack");

// Classic
// 1 2 3

// 1
// 1 2 => 2 1
// 2 1 3 => 3 2 1

class SortStack {
  constructor() {
    this.stack = new Stack();
    this.auxStack = new Stack();
  }

  pop() {
    return this.stack.pop();
  }

  // peek stack
  // if value <= peeked
  //   add to stack
  //   return
  // else
  //    move item to aux stack until value <=
  //    add to stack
  //    move aux stack back
  swapStacks(from, to, value) {
    let current = from.pop();
    while (current) {
      if (value && value <= current) {
        from.push(current);
        return;
      }

      to.push(current);
      current = from.pop();
    }
  }

  push(value) {
    let current = this.stack.peek();
    if (!current || value <= current) {
      this.stack.push(value);
      return;
    }

    this.swapStacks(this.stack, this.auxStack, value);
    this.stack.push(value);
    this.swapStacks(this.auxStack, this.stack);
  }

  peek() {
    return this.stack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }
}

const { assert } = require("chai");

describe("SortStack", () => {
  it("Should push and pop in the right order", () => {
    const sortStack = new SortStack();
    sortStack.push(1);
    sortStack.push(2);
    sortStack.push(3);
    sortStack.push(2);
    sortStack.push(1);
    sortStack.push(5);
    assert.equal(sortStack.pop(), 1);
    assert.equal(sortStack.pop(), 1);
    assert.equal(sortStack.pop(), 2);
    assert.equal(sortStack.pop(), 2);
    assert.equal(sortStack.pop(), 3);
    assert.equal(sortStack.pop(), 5);
  });
  it("Should isEmpty", () => {
    const sortStack = new SortStack();
    assert.equal(sortStack.isEmpty(), true);
    sortStack.push(1);
    assert.equal(sortStack.isEmpty(), false);
    sortStack.pop();
    assert.equal(sortStack.isEmpty(), true);
  });
});

module.exports = SortStack;
