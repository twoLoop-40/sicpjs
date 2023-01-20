const one = (f) => (x) => f(x);

const two = (f) => (x) => f(f(x));

function plus(n, m) {
  return (f) => (x) => m(f)(n(f)(x));
}

function add_1(n) {
  return (f) => (x) => f(n(f)(x));
}
