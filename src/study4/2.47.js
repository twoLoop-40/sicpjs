const { list, head, tail } = require('sicp');

function makeFrameList(origin, edge1, edge2) {
  return list(origin, edge1, edge2);
}
// function makeFramePair(origin, edge1, edge2) {
//   return pair(origin, pair(edge1, edge2));
// }

function originFrame(frame) {
  return head(frame);
}

function edge1Frame(frame) {
  return head(tail(frame));
}

function edge2Frame(frame) {
  return head(tail(tail(frame)));
}

module.exports = {
  makeFrame: makeFrameList,
  originFrame,
  edge1Frame,
  edge2Frame,
};
