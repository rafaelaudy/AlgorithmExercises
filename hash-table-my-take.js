hashCode = function(key) {
  let hash = 0,
    i,
    chr;
  if (key.length === 0) return hash;
  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class Node {
  constructor(key, value) {}
}

class Table {
  constructor() {
    this.array = [];
  }

  hash(key) {
    const hashedKey = hashCode(key);
    return this.array[hashedKey];
  }

  insert(key, value) {
    const hashedKey = hashCode(key);
    console.log("hash", hashedKey);

    if (this.array[hashedKey] === undefined) {
      this.array[hashedKey] = [value];
    } else {
      this.array[hashedKey].push(value);
    }
  }

  get(key) {}

  getAll() {}
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
    assert.equal(table.hash("abc"), 4);
  });

  it("Should implement insert", () => {
    assert.equal(table.cells[table.hash("baa")].value, 1);
    assert.equal(table.cells[table.hash("aba")].next.value, 3);
    assert.equal(table.cells[table.hash("aac")].value, 5);
  });

  it("Should implement get", () => {
    assert.equal(table.get("baa"), 1);
    assert.equal(table.get("aba"), 3);
    assert.equal(table.get("aac"), 5);
    assert.equal(table.get("abc"), null);
  });

  it("Should implement getAll", () => {
    assert.deepEqual(table.getAll(), [[], [], [1, 3], [5], []]);
  });
});
