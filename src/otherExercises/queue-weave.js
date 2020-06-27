const Queue = require("../structureImplementations/queue");

const weave = (queue, toConcatQueue) => {
  const weavedQueue = new Queue();
  let next = queue.dequeue();
  let nextToConcat = toConcatQueue.dequeue();

  while (next || nextToConcat) {
    if (next) weavedQueue.enqueue(next);
    if (nextToConcat) weavedQueue.enqueue(nextToConcat);

    next = queue.dequeue();
    nextToConcat = toConcatQueue.dequeue();
  }

  return weavedQueue;
};

const { assert } = require("chai");

describe("Weaving with Queues", () => {
  it("Should weave two queues together", () => {
    const one = new Queue();
    one.enqueue(1);
    one.enqueue(2);
    one.enqueue(3);
    const two = new Queue();
    two.enqueue("one");
    two.enqueue("two");
    two.enqueue("three");
    two.enqueue("four");
    two.enqueue("five");
    const result = weave(one, two);
    assert.equal(result.dequeue(), 1);
    assert.equal(result.dequeue(), "one");
    assert.equal(result.dequeue(), 2);
    assert.equal(result.dequeue(), "two");
    assert.equal(result.dequeue(), 3);
    assert.equal(result.dequeue(), "three");
    assert.equal(result.dequeue(), "four");
    assert.equal(result.dequeue(), "five");
    assert.equal(result.dequeue(), undefined);
  });
});
