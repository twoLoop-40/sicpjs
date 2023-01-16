import { newtonsMethod } from './index.js';

function cubic(a, b, c) {
  return (x) => x ** 3 + a * x ** 2 + b * x + c;
}

// test cubic
console.log(newtonsMethod(cubic(2, 3, 4), 1));
