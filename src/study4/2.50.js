const { transFormPainter, makeVect } = require('.');

function flipHoriz(painter) {
  return transFormPainter(
    painter,
    makeVect(0, 1),
    makeVect(1, 1),
    makeVect(0, 0)
  );
}

function halfTurn(painter) {
  return transFormPainter(
    painter,
    makeVect(1, 1),
    makeVect(0, 1),
    makeVect(1, 0)
  );
}

function rotate90(painter) {
  return transFormPainter(
    painter,
    makeVect(1, 0),
    makeVect(1, 1),
    makeVect(0, 0)
  );
}

function rotate270(painter) {
  return halfTurn(rotate90(painter));
}

module.exports = { flipHoriz, halfTurn, rotate90, rotate270 };
