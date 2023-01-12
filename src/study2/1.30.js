import { square } from '../study1';

function sum(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result + term(a));
  }
  return iter(a, 0);
}

console.log(sum(square, 1, (x) => x + 2, 10));
