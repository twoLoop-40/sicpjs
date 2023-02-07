const {
  pair,
  tail,
  head,
  draw_data: drawLine,
  for_each: forEach,
} = require('sicp');
const { addVect, scaleVect, subVect } = require('./2.46');
const { edge1Frame, makeFrame, edge2Frame, originFrame } = require('./2.47');

function makeVect(x, y) {
  return pair(x, y);
}

function xcorVect(v) {
  return head(v);
}

function ycorVect(v) {
  return tail(v);
}

function makeSegment(start, end) {
  return pair(start, end);
}

function startSegment(segment) {
  return head(segment);
}

function endSegment(segment) {
  return tail(segment);
}

function frameCoordMap(frame) {
  return (vect) =>
    addVect(
      originFrame(frame),
      addVect(
        scaleVect(xcorVect(vect), edge1Frame(frame)),
        scaleVect(ycorVect(vect), edge2Frame(frame))
      )
    );
}

function segmentsToPainter(segmentList) {
  return (frame) => {
    forEach(
      (segment) =>
        drawLine(
          frameCoordMap(frame)(startSegment(segment)),
          frameCoordMap(frame)(endSegment(segment))
        ),
      segmentList
    );
  };
}

function transFormPainter(painter, origin, corner1, corner2) {
  return (frame) => {
    const m = frameCoordMap(frame);
    const newOrigin = m(origin);
    return painter(
      makeFrame(
        newOrigin,
        subVect(m(corner1), newOrigin),
        subVect(m(corner2), newOrigin)
      )
    );
  };
}
module.exports = {
  makeVect,
  xcorVect,
  ycorVect,
  frameCoordMap,
  makeSegment,
  makeFrame,
  segmentsToPainter,
  startSegment,
  endSegment,
  edge1Frame,
  edge2Frame,
  originFrame,
  transFormPainter,
};
