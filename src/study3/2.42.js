const {
  head,
  tail,
  map,
  flatmap,
  filter,
  pair,
  list,
  display_list: displayList,
} = require('sicp');
const { enumerateInterval } = require('.');

function isSafe(currCol, positions) {}

function adjoinPosition(newRow, currCol, restOfQueens) {
  return pair(pair(newRow, currCol), restOfQueens);
}

function queens(boardSize) {
  function queenCols(k) {
    return k === 0
      ? list(null)
      : filter(
          (positions) => isSafe(k, positions),
          flatmap(
            (restOfQueens) =>
              map(
                (newRow) => adjoinPosition(newRow, k, restOfQueens),
                enumerateInterval(1, boardSize)
              ),
            queenCols(k - 1)
          )
        );
  }
  queenCols(boardSize);
}

function main() {
  const BOARD_SIZE = 8;
  displayList(queens(BOARD_SIZE));
}

main();
