import { square, inc } from '../study1/index.js';

function compose(f, g) {
  return (x) => f(g(x));
}

console.log(compose(square, inc)(6)); // 49

export { compose };
