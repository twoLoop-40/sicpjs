import {
  math_abs as mathAbs,
  display,
  stringify,
  is_null as isNull,
  head,
  tail,
  pair,
  is_pair as isPair,
  list,
  append,
} from 'sicp';
import { xPoint, yPoint } from './2.2.js';

export function isSameSign(x, y) {
  return x * y > 0;
}

function printPoint(p) {
  return display(`(${stringify(xPoint(p))}, ${stringify(yPoint(p))})`);
}
export { mathAbs, printPoint };

export function accumulate(op, initial, sequence) {
  if (isNull(sequence)) {
    return initial;
  } else {
    return op(head(sequence), accumulate(op, initial, tail(sequence)));
  }
}

export function enumerateInterval(low, high) {
  return low > high ? null : pair(low, enumerateInterval(low + 1, high));
}

export function enumerateTree(tree) {
  return isNull(tree)
    ? null
    : !isPair(tree)
    ? list(tree)
    : append(enumerateTree(head(tree)), enumerateTree(tail(tree)));
}
