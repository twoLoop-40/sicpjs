import { inc, dec } from './index.js';

function plusRecur(a, b) {
  return a === 0 ? b : inc(plusRecur(dec(a), b));
}

function plusIter(a, b) {
  return a === 0 ? b : plusIter(dec(a), inc(b));
}
console.log(plusRecur(3, 4)); // 7
// inc(plusRecur(2, 4))
// inc(inc(plusRecur(1, 4)))
// inc(inc(inc(plusRecur(0, 4))))
// inc(inc(inc(4)))
// inc(inc(5))
// inc(6)
// 7

console.log(plusIter(3, 4)); // 7
// plusIter(3, 4)
// plusIter(2, 5)
// plusIter(1, 6)
// plusIter(0, 7)
// 7
