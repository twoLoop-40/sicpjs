import { math_abs as mathAbs } from 'sicp';
import { average } from './index.js';

function iterativeImprove(test, update) {
  function iter(guess) {
    if (test(guess)) {
      return guess;
    }
    return iter(update(guess));
  }
  return iter;
}

function sqrt(x) {
  function improve(guess) {
    return average(guess, x / guess);
  }
  const tolerance = 0.000001;
  function test(x) {
    return mathAbs(x - improve(x)) < tolerance;
  }
  return iterativeImprove(test, improve)(1);
}

function fixedPoint(f, guess) {
  const tolerance = 0.000001;
  function test(x, y) {
    return mathAbs(x - y) < tolerance;
  }
  return iterativeImprove(test, f)(guess);
}

console.log(sqrt(9));
