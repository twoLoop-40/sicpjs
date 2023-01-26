const { pair, tail, head } = require('sicp');
const { addVect, scaleVect } = require('./2.46');
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
module.exports = { makeVect, xcorVect, ycorVect };
