const chunk = (array, chunkSize) =>
  array.reduce(
    (acc, item) => {
      let currentChunkIndex = acc.length - 1;

      if (acc[currentChunkIndex].length < chunkSize)
        acc[currentChunkIndex].push(item);
      else {
        acc.push([item]);
      }

      return acc;
    },
    [[]]
  );

const chunkAlternative = (array, chunkSize) => {
  let chunks = [];
  for (let index = 0; index < array.length; index += chunkSize) {
    chunks.push(array.slice(index, index + chunkSize));
  }

  return chunks;
};

const { assert } = require("chai");

describe("Array Chunking", () => {
  it("Should implement array chunking", () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    assert.deepEqual(chunkAlternative([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
    assert.deepEqual(chunkAlternative([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunkAlternative([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  });
});
