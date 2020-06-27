class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  addToTail(value) {
    const newTail = new Node(value);
    if (this.head) {
      const oldTail = this.tail;
      newTail.prev = oldTail;
      oldTail.next = newTail;
      this.tail = newTail;
    } else {
      this.head = newTail;
      this.tail = newTail;
    }
  }

  // iterate over
  // current char to start of a string
  // current char at the end of a string

  // return compare two strings the same

  isPalindrome() {
    if (!this.head) {
      return false;
    }

    let current = this.head;
    let string = "";
    let invertedString = "";

    while (current) {
      string = string + current.value;
      invertedString = current.value + invertedString;

      current = current.next;
    }

    return string === invertedString;
  }
}

const { assert } = require("chai");

describe("isPalindrome", () => {
  it("Should check isPalindrome", () => {
    const list = new LinkedList();
    list.addToTail("a");
    assert.equal(list.isPalindrome(), true);
    list.addToTail("a");
    assert.equal(list.isPalindrome(), true);
    list.addToTail("b");
    assert.equal(list.isPalindrome(), false);
    list.addToTail("a");
    assert.equal(list.isPalindrome(), false);
    list.addToTail("a");
    assert.equal(list.isPalindrome(), true);
  });
});

module.exports = LinkedList;
