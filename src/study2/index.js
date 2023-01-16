import { math_abs as mathAbs } from 'sicp';
function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function isPrime(n) {
  function iter(i) {
    return i === n ? true : n % i === 0 ? false : iter(i + 1);
  }
  return iter(2);
}

function average(x, y) {
  return (x + y) / 2;
}

function averageDamp(f) {
  return (x) => average(x, f(x));
}

const tolerance = 0.00001;
function fixedPoint(f, firstGuess) {
  function closeEnough(x, y) {
    return mathAbs(x - y) < tolerance;
  }
  function tryWith(guess) {
    const next = f(guess);
    return closeEnough(guess, next) ? next : tryWith(next);
  }
  return tryWith(firstGuess);
}

const dx = 0.00001;
function deriv(g) {
  return (x) => (g(x + dx) - g(x)) / dx;
}

function newtonTransform(g) {
  return (x) => x - g(x) / deriv(g)(x);
}

function newtonsMethod(g, guess) {
  return fixedPoint(newtonTransform(g), guess);
}

export { sum, isPrime, averageDamp, average, fixedPoint, newtonsMethod };
