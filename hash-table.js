class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Table {
  constructor(size) {
    this.cells = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
    return total % this.cells.length;
  }

  insert(key, value) {
    const hash = this.hash(key);
    if (!this.cells[hash]) {
      this.cells[hash] = new Node(key, value);
    } else if (this.cells[hash].key === key) {
      this.cells[hash].value = value;
    } else {
      let node = this.cells[hash];
      while (node.next) {
        if (node.next.key === key) {
          node.next.value = value;
          return;
        }
        node = node.next;
      }
      node.next = new Node(key, value);
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (!this.cells[hash]) return null;
    else {
      let node = this.cells[hash];
      while (node) {
        if (node.key === key) return node.value;
        node = node.next;
      }
      return null;
    }
  }

  getAll() {
    const table = [];
    for (let i = 0; i < this.cells.length; i++) {
      const cell = [];
      let node = this.cells[i];
      while (node) {
        cell.push(node.value);
        node = node.next;
      }
      table.push(cell);
    }
    return table;
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
