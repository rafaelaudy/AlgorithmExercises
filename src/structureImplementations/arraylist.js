class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const value = this.data[this.length];
    this.data[this.length] = undefined;
    this.length--;
    return value;
  }

  getIndex(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) return i;
    }

    return -1;
  }

  deleteIndex(index) {
    let previous = this.data[this.length];
    let actual;
    for (let i = this.length; i > index; i--) {
      actual = this.data[i - 1];
      this.data[i - 1] = previous;
      this.data[i] = undefined;
      previous = actual;
    }
  }
}

const { assert } = require("chai");

describe("ArrayList", () => {
  it("Should work", () => {
    const arrayList = new ArrayList();
    arrayList.push(1);
    arrayList.push(2);
    arrayList.push(3);
    arrayList.push(4);
    arrayList.push(5);
    arrayList.push(6);
    assert.equal(arrayList.getIndex(4), 3);
    assert.equal(arrayList.getIndex(5), 4);
    assert.equal(arrayList.getIndex(6), 5);
    arrayList.pop();
    assert.equal(arrayList.getIndex(4), 3);
    assert.equal(arrayList.getIndex(5), 4);
    assert.equal(arrayList.getIndex(6), -1);
    arrayList.deleteIndex(3);
    assert.equal(arrayList.getIndex(3), 2);
    assert.equal(arrayList.getIndex(4), -1);
    assert.equal(arrayList.getIndex(5), 3);
  });
});
