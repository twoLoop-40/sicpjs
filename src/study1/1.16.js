import { isEven, square } from '.';

function fastExptIter(base, exp) {
  fastExptIter.counter = [];
  const iter = (base, exp, result) => {
    fastExptIter.counter.push(result);
    return exp === 0
      ? result
      : isEven(exp)
      ? iter(square(base), exp / 2, result)
      : iter(base, exp - 1, result * base);
  };

  return iter(base, exp, 1);
}

console.log(fastExptIter(2, 10));
console.log(fastExptIter.counter);
