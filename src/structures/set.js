class Set {
  constructor() {
    this.set = {};
  }

  add(value) {
    if (value) {
      this.set[value] = value;
    }
  }

  has(value) {
    return this.set[value] ? true : false;
  }

  clear() {
    this.set = {};
  }

  delete(value) {
    if (value) delete this.set[value];
  }
}

const { assert } = require("chai");

describe("Set", () => {
  it("Should work", () => {
    const set = new Set();
    set.add(1);
    set.add(1);
    set.add(2);
    assert.isTrue(set.has(1));
    assert.isTrue(set.has(2));
    assert.isFalse(set.has(3));
    set.delete(2);
    assert.isFalse(set.has(2));
    assert.isTrue(set.has(1));
    set.clear();
    assert.isFalse(set.has(1));
  });
});
