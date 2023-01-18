import { pair } from 'sicp';
import { mathAbs, isSameSign } from './index.js';

export function makeRat(n, d) {
  isSameSign(n, d)
    ? pair(mathAbs(n), mathAbs(d))
    : pair(-mathAbs(n), mathAbs(d));
}
