hashCode = function(key) {
  let hash = 0,
    i,
    chr;
  if (key.length === 0) return hash;
  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

class Table {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return hashCode(key);
  }

  insert(key, value) {
    const hashedKey = this.hash(key);

    if (this.array[hashedKey] === undefined) {
      this.array[hashedKey] = [value];
    } else {
      this.array[hashedKey].push(value);
    }
  }

  get(key) {
    return this.array[this.hash(key)];
  }

  getAll() {
    return this.array.reduce((acc, current) => acc.concat(current));
  }
}

const { assert } = require("chai");

const table = new Table(5);
table.insert("baa", 1);
table.insert("aba", 2);
table.insert("aba", 3);
table.insert("aac", 4);
table.insert("aac", 5);

describe("Hash Table", () => {
  it("Should implement hash", () => {
    assert.equal(table.hash("abc"), 96354);
  });

  it("Should implement get", () => {
    assert.deepEqual(table.get("baa"), [1]);
    assert.deepEqual(table.get("aba"), [2, 3]);
    assert.deepEqual(table.get("aac"), [4, 5]);
    assert.equal(table.get("abc"), undefined);
  });

  it("Should implement getAll", () => {
    assert.deepEqual(table.getAll(), [4, 5, 2, 3, 1]);
  });
});
