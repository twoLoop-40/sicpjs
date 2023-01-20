import { math_abs as mathAbs, display, stringify } from 'sicp';
import { xPoint, yPoint } from './2.2.js';

export function isSameSign(x, y) {
  return x * y > 0;
}

function printPoint(p) {
  return display(`(${stringify(xPoint(p))}, ${stringify(yPoint(p))})`);
}
export { mathAbs, printPoint };
