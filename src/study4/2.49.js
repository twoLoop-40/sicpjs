const { list } = require('sicp');
const { segmentsToPainter, makeSegment, makeVect } = require('.');

function paintBorder() {
  return segmentsToPainter(
    list(
      makeSegment(makeVect(0, 0), makeVect(0, 1)),
      makeSegment(makeVect(0, 1), makeVect(1, 1)),
      makeSegment(makeVect(1, 1), makeVect(1, 0)),
      makeSegment(makeVect(1, 0), makeVect(0, 0))
    )
  );
}

function paintX() {
  return segmentsToPainter(
    list(
      makeSegment(makeVect(0, 0), makeVect(1, 1)),
      makeSegment(makeVect(0, 1), makeVect(1, 0))
    )
  );
}

module.exports = { paintBorder, paintX };
