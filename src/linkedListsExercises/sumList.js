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
}

/// h   t
//  7 1 6
//  = 617

/// h         t
//  7 1 6 1 2 3
//  = 321617

//  h
//  1
//  = 1

// iterate over both arras from tail concact numbers
// sum numbers
// split number add to array

const sumList = (list1, list2) => {
  let node1 = list1.tail || {};
  let node2 = list2.tail || {};
  let number1 = "";
  let number2 = "";

  while (node1 || node2) {
    number1 = node1 ? number1 + node1.value : number1;
    number2 = node2 ? number2 + node2.value : number2;

    node1 = node1 ? node1.prev : node1;
    node2 = node2 ? node2.prev : node2;
  }

  const sum = Number(number1) + Number(number2);

  if (typeof sum !== "number" || isNaN(sum)) {
    return undefined;
  }

  const newList = new LinkedList();
  sum
    .toString()
    .split("")
    .reverse()
    .map((number) => newList.addToTail(number));
  return newList;
};

const { assert } = require("chai");

describe("sumList", () => {
  it("Should check sumList", () => {
    const list1 = new LinkedList();
    list1.addToTail(4);
    list1.addToTail(2);
    list1.addToTail(1);

    const list2 = new LinkedList();
    list2.addToTail(2);
    list2.addToTail(3);
    list2.addToTail(2);

    const sum = sumList(list1, list2);
    assert.equal(sum.head.value, 6);
    assert.equal(sum.head.next.value, 5);
    assert.equal(sum.head.next.next.value, 3);

    list2.addToTail("a");
    assert.equal(sumList(list1, list2), undefined);
  });
});

module.exports = LinkedList;
