import { inc } from '../study1/index.js';

function double(f) {
  return (x) => f(f(x));
}

console.log(double(double(double))(inc)(5)); // 21
