// Solution 1
//
//
//  .  1  .  .  .  .
//  .  .  2  .  .  .
//  .  .  3  .  .  .
//  .  4  .  .  .  .
//  .  .  .  .  5  .
//  .  .  .  6  .  .
//
//  .  .  .  .  .  .
//  .  .  4  .  .  1
//  .  .  .  3  2  .
//  6  .  .  .  .  .
//  .  5  .  .  .  .
//  .  .  .  .  .  .
//
// 0,0 -> 0,2
// 0,1 -> 1,2
// 0,2 -> 2,2
// 1,0 -> 0,1
// 1,1 -> 1,1
// 1,2 -> 2,1

// counter = n.length - 1
// n for each -- xIndex
//   n for each -- yIndex
//      change bits
//      place on [yindex][counter]
//   counter - 1

// change bits
// 0,0 -> 0,1
// 0,1 -> 1,1
// 1,0 -> 0,0
// 1,1 -> 1,0

const changeBits = (matrix) => {
  if (!Array.isArray(matrix) && matrix.length == 2) {
    return undefined;
  }

  return [
    [matrix[1][0], matrix[0][0]],
    [matrix[1][1], matrix[0][1]],
  ];
};

const rotateMatrix = (matrix) => {
  if (!Array.isArray(matrix)) {
    return undefined;
  }

  let counter = matrix.length - 1;
  const newMatrix = [];
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (!newMatrix[y]) {
        newMatrix[y] = [];
      }

      const point = changeBits(matrix[x][y]);
      newMatrix[y][counter] = point;
    }

    counter--;
  }

  return newMatrix;
};

const { assert } = require("chai");

describe("rotateMatrix", () => {
  it("Should implement rotateMatrix", () => {
    //  .  1  .  .  .  .
    //  .  .  2  .  .  .
    //  .  .  3  .  .  .
    //  .  4  .  .  .  .
    //  .  .  .  .  5  .
    //  .  .  .  6  .  .

    //  .  .  .  .  .  .
    //  .  .  4  .  .  1
    //  .  .  .  3  2  .
    //  6  .  .  .  .  .
    //  .  5  .  .  .  .
    //  .  .  .  .  .  .

    assert.equal(
      JSON.stringify(
        rotateMatrix([
          [
            [
              [".", "1"],
              [".", "."],
            ],
            [
              [".", "."],
              ["2", "."],
            ],
            [
              [".", "."],
              [".", "."],
            ],
          ],
          [
            [
              [".", "."],
              [".", "4"],
            ],
            [
              ["3", "."],
              [".", "."],
            ],
            [
              [".", "."],
              [".", "."],
            ],
          ],
          [
            [
              [".", "."],
              [".", "."],
            ],
            [
              [".", "."],
              [".", "6"],
            ],
            [
              ["5", "."],
              [".", "."],
            ],
          ],
        ])
      ),
      JSON.stringify([
        [
          [
            [".", "."],
            [".", "."],
          ],
          [
            [".", "."],
            ["4", "."],
          ],
          [
            [".", "."],
            [".", "1"],
          ],
        ],
        [
          [
            [".", "."],
            ["6", "."],
          ],
          [
            [".", "3"],
            [".", "."],
          ],
          [
            ["2", "."],
            [".", "."],
          ],
        ],
        [
          [
            [".", "5"],
            [".", "."],
          ],
          [
            [".", "."],
            [".", "."],
          ],
          [
            [".", "."],
            [".", "."],
          ],
        ],
      ])
    );

    assert.equal(rotateMatrix(12), undefined);
    assert.equal(rotateMatrix(), undefined);
  });
});
