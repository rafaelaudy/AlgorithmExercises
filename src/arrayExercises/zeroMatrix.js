// Solution 1
//  .  0  .      0  0  0
//  .  .  0      0  0  0
//  .  .  0         0  0
//  .  0  .         0  0
//  .  0  .         0  0
//  0  .  .         0  0
//

// isArray && isArray

// xLength
// 0onX
// yLength
// 0onY
// isSmallerX

// create new matrix

// iterate on bigger array
//   0onX[x] = 1
//   iterate on smaller array
//     0onY length === yLength
//       return

//     is 0
//       0onY[y] = 1

//       iterate on smaller array
//         copy 0
//       iterate on bigger array
//         copy 0
//       break
//     otherwise copy if not 0 on new array
//   0onx length === xLength
//       return

const zeroMatrix = (matrix) => {
  if (!Array.isArray(matrix) && !Array.isArray(matrix[0])) {
    return undefined;
  }

  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  const rowKeys0 = {};
  const columnKeys0 = {};

  const newMatrix = [];

  for (let c = 0; c < columnLength; c++) {
    for (let r = 0; r < rowLength; r++) {
      if (matrix[r][c] === 0) {
        rowKeys0[r] = 1;
        columnKeys0[c] = 1;

        for (let newC = 0; newC < columnLength; newC++) {
          newMatrix[r] = newMatrix[r] ? newMatrix[r] : [];
          newMatrix[r][newC] = 0;
        }

        for (let newR = 0; newR < rowLength; newR++) {
          newMatrix[newR] = newMatrix[newR] ? newMatrix[newR] : [];
          newMatrix[newR][c] = 0;
        }

        if (
          Object.keys(rowKeys0).length === rowLength ||
          Object.keys(columnKeys0).length === columnLength
        ) {
          return newMatrix;
        }
      }

      if (!newMatrix[r] || newMatrix[r][c] !== 0) {
        newMatrix[r] = newMatrix[r] ? newMatrix[r] : [];
        newMatrix[r][c] = matrix[r][c];
      }
    }
  }

  return newMatrix;
};

const zeroMatrixOptimezed = (matrix) => {
  if (!Array.isArray(matrix) && !Array.isArray(matrix[0])) {
    return undefined;
  }

  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  let isAll0 = false;
  const rowKeys0 = {};
  const columnKeys0 = {};

  for (let c = 0; c < columnLength; c++) {
    for (let r = 0; r < rowLength; r++) {
      if (matrix[r][c] === 0) {
        rowKeys0[r] = 1;
        columnKeys0[c] = 1;

        if (
          Object.keys(rowKeys0).length === rowLength ||
          Object.keys(columnKeys0).length === columnLength
        ) {
          isAll0 = true;
          break;
        }
      }
    }
  }

  for (let c = 0; c < columnLength; c++) {
    for (let r = 0; r < rowLength; r++) {
      if (rowKeys0[r] || columnKeys0[c] || isAll0) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
};

const { assert } = require("chai");

describe("zeroMatrix", () => {
  it("Should implement zeroMatrix", () => {
    assert.equal(
      JSON.stringify(
        zeroMatrixOptimezed([
          [0, 1],
          [0, 1],
          [1, 1],
          [1, 1],
          [1, 1],
        ])
      ),
      JSON.stringify([
        [0, 0],
        [0, 0],
        [0, 1],
        [0, 1],
        [0, 1],
      ])
    );

    assert.equal(
      JSON.stringify(
        zeroMatrixOptimezed([
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 1],
          [1, 1],
        ])
      ),
      JSON.stringify([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    );

    assert.equal(
      JSON.stringify(
        zeroMatrixOptimezed([
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ])
      ),
      JSON.stringify([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    );

    assert.equal(
      JSON.stringify(
        zeroMatrixOptimezed([
          [0, 1, 1, 1, 1],
          [0, 0, 1, 1, 1],
          [1, 1, 1, 1, 1],
        ])
      ),
      JSON.stringify([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1],
      ])
    );
  });
});
