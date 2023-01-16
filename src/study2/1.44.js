import { compose } from './1.42.js';

function repeated(f, n) {
  return n === 0 ? (x) => x : compose(f, repeated(f, n - 1));
}

const dx = 0.00001;
function smooth(f) {
  return (x) => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

function smoothRepeated(f, n) {
  return repeated(smooth, n)(f);
}

export { smoothRepeated };
