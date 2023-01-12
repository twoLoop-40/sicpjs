import { double, halve, isEven } from './index.js';

function fastTimesIter(a, b) {
  const iter = (a, b, result) => {
    return b === 0
      ? result
      : isEven(b)
      ? iter(double(a), halve(b), result)
      : iter(a, b - 1, result + a);
  };
  return iter(a, b, 0);
}

console.log(fastTimesIter(6, 7));
