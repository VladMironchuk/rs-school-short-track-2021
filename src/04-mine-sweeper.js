/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const trueIndex = [];

  matrix.forEach((item, index) => {
    item.forEach((item_, index_) => {
      if (item_ === true) trueIndex.push([index, index_]);
    });
  });

  const mines = matrix.map((item) => item.map(() => 0));

  mines.forEach((item, index) => {
    item.forEach((item_, indexIn) => {
      trueIndex.forEach((item__) => {
        const X = Math.abs(index - item__[0]);
        const Y = Math.abs(indexIn - item__[1]);
        const Xcond = X > 0 && X < 2;
        const Ycond = Y > 0 && Y < 2;
        const COORDcond = Xcond || Ycond;
        if (COORDcond && X + Y <= 2) mines[index][indexIn]++;
      });
    });
  });

  return mines;
}

module.exports = minesweeper;
