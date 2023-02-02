const {
  head,
  tail,
  map,
  filter,
  pair,
  list,
  display_list: displayList,
} = require('sicp');
const { flatmap, enumerateInterval } = require('.');

function rowPosition(position) {
  return head(position);
}
function colPosition(position) {
  return tail(position);
}
function findRow(col, positions) {
  return positions === null
    ? null
    : col === colPosition(head(positions))
    ? rowPosition(head(positions))
    : findRow(col, tail(positions));
}

function isSafe(givenCol, positions) {
  const givenRow = findRow(givenCol, positions);
  const exceptGivenCol = filter(
    (position) => colPosition(position) !== givenCol,
    positions
  );
  function isSafeRecur(positions) {
    return positions === null
      ? true
      : givenRow === null
      ? false
      : givenRow !== rowPosition(head(positions)) &&
        givenRow + givenCol !==
          rowPosition(head(positions)) + colPosition(head(positions)) &&
        givenRow - givenCol !==
          rowPosition(head(positions)) - colPosition(head(positions)) &&
        isSafeRecur(tail(positions));
  }
  return isSafeRecur(exceptGivenCol);
}

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
  return queenCols(boardSize);
}

function main() {
  const BOARD_SIZE = 8;
  displayList(queens(BOARD_SIZE));
}

main();
