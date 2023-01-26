const { makeVect, xcorVect, ycorVect } = require('.');

function addVect(v1, v2) {
  return makeVect(xcorVect(v1) + xcorVect(v2), ycorVect(v1) + ycorVect(v2));
}

function subVect(v1, v2) {
  return makeVect(xcorVect(v1) - xcorVect(v2), ycorVect(v1) - ycorVect(v2));
}

function scaleVect(s, v) {
  return makeVect(s * xcorVect(v), s * ycorVect(v));
}

module.exports = { addVect, subVect, scaleVect };
