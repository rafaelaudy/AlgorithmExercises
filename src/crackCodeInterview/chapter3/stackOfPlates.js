const Stack = require("./stack");

class Node {
  constructor(value) {
    this.value = value;
  }
}

// Limit 3

// 1
// 1 2
// 1 2 3

// 1 2 3
// 4

// 1 2 3
// 4 5

// 1 2 3
// 4 5 6
// 6

// 1 2 3
// 4 5 6

class StackOfPlates {
  constructor() {
    this.limit = 3;
    this.currentStackHeight = 0;
    this.stackOfPlates = new Stack();
    this.stackOfPlates.push(new Stack());
  }

  // if not value return

  // check height equal limit
  //    create new stack
  //    push new stask
  //    reset height
  // push value to stack
  // raise height

  push(value) {
    if (this.currentStackHeight === this.limit) {
      this.stackOfPlates.push(new Stack());
      this.currentStackHeight = 0;
    }

    this.stackOfPlates.peek().push(value);
    this.currentStackHeight++;
  }

  // check if there is a stack on stack of plates

  // remove value
  // decrease height

  // check if height === 0
  //    remove stack
  //    set height = 3
  pop() {
    const currentStack = this.stackOfPlates.peek();
    if (!currentStack) return undefined;

    const value = currentStack.pop();
    this.currentStackHeight--;

    if (this.currentStackHeight === 0) {
      this.stackOfPlates.pop();
      this.currentStackHeight = this.limit;
    }

    return value;
  }

  peek() {
    const currentStack = this.stackOfPlates.peek();
    if (!currentStack) return undefined;

    return currentStack.peek();
  }

  isEmpty() {
    return !this.stackOfPlates.peek() || this.stackOfPlates.peek().isEmpty();
  }
}

const { assert } = require("chai");

describe("StackOfPlates", () => {
  it("Should pop", () => {
    const stackOfPlates = new StackOfPlates();
    stackOfPlates.push(1);
    stackOfPlates.push(2);
    stackOfPlates.push(3);
    assert.equal(stackOfPlates.pop(), 3);
    assert.equal(stackOfPlates.pop(), 2);
    assert.equal(stackOfPlates.pop(), 1);
  });
  it("Should push", () => {
    const stackOfPlates = new StackOfPlates();
    stackOfPlates.push(1);
    assert.equal(stackOfPlates.peek(), 1);
    stackOfPlates.push(2);
    assert.equal(stackOfPlates.peek(), 2);
    stackOfPlates.push(3);
    assert.equal(stackOfPlates.peek(), 3);
  });
  it("Should peek", () => {
    const stackOfPlates = new StackOfPlates();
    stackOfPlates.push(1);
    assert.equal(stackOfPlates.peek(), 1);
    stackOfPlates.push(2);
    assert.equal(stackOfPlates.peek(), 2);
    assert.equal(stackOfPlates.peek(), 2);
    stackOfPlates.push(3);
    assert.equal(stackOfPlates.peek(), 3);
  });
  it("Should isEmpty", () => {
    const stackOfPlates = new StackOfPlates();
    assert.equal(stackOfPlates.isEmpty(), true);
    stackOfPlates.push(1);
    assert.equal(stackOfPlates.isEmpty(), false);
    stackOfPlates.pop();
    assert.equal(stackOfPlates.isEmpty(), true);
  });
});

module.exports = Stack;
