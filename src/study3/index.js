const {
  math_abs: mathAbs,
  display,
  stringify,
  is_null: isNull,
  head,
  tail,
  pair,
  is_pair: isPair,
  list,
  append,
  map,
} = require('sicp');
const { xPoint, yPoint } = require('./2.2.js');

function isSameSign(x, y) {
  return x * y > 0;
}

function printPoint(p) {
  return display(`(${stringify(xPoint(p))}, ${stringify(yPoint(p))})`);
}

function accumulate(op, initial, sequence) {
  if (isNull(sequence)) {
    return initial;
  } else {
    return op(head(sequence), accumulate(op, initial, tail(sequence)));
  }
}

function enumerateInterval(low, high) {
  return low > high ? null : pair(low, enumerateInterval(low + 1, high));
}

function enumerateTree(tree) {
  return isNull(tree)
    ? null
    : !isPair(tree)
    ? list(tree)
    : append(enumerateTree(head(tree)), enumerateTree(tail(tree)));
}

function flatmap(f, seq) {
  return accumulate(append, null, map(f, seq));
}

module.exports = {
  isSameSign,
  printPoint,
  accumulate,
  enumerateInterval,
  enumerateTree,
  flatmap,
  mathAbs,
};
