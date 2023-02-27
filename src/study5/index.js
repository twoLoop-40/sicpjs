const {
  is_number: isNumber,
  is_string: isString,
  pair,
  is_pair: isPair,
  error,
  list,
  head,
  tail,
} = require('sicp');

function isVariable(exp) {
  return isString(exp);
}
function isSameVariable(v1, v2) {
  return isVariable(v1) && isVariable(v2) && v1 === v2;
}

function isSum(exp) {
  return isPair(exp) && head(exp) === '+';
}

function makeSum(a1, a2) {
  return pair('+', pair(a1, a2));
}

function addend(exp) {
  return head(tail(exp));
}

function augend(exp) {
  return tail(tail(exp));
}

function isProduct(exp) {
  return isPair(exp) && head(exp) === '*';
}

function makeProduct(m1, m2) {
  return pair('*', pair(m1, m2));
}

function multiplier(exp) {
  isProduct(exp) && head(tail(exp));
}

function multiplicand(exp) {
  isProduct(exp) && tail(tail(exp));
}

function makeExp(base, exponent) {
  return base === 1
    ? 1
    : exponent === 0
    ? 1
    : exponent === 1
    ? base
    : list('**', base, exponent);
}

function isExp(exp) {
  return isPair(exp) && head(exp) === '**';
}

function base(exp) {
  return head(tail(exp));
}

function exponent(exp) {
  return tail(tail(exp));
}

function deriv(exp, variable) {
  return isNumber(exp)
    ? 0
    : isVariable(exp)
    ? isSameVariable(exp, variable)
      ? 1
      : 0
    : isSum(exp)
    ? makeSum(deriv(addend(exp), variable), deriv(augend(exp), variable))
    : isProduct(exp)
    ? makeSum(
        makeProduct(multiplier(exp), deriv(multiplicand(exp), variable)),
        makeProduct(deriv(multiplier(exp), variable), multiplicand(exp))
      )
    : error(exp, 'unknown expression type -- deriv');
}

module.exports = {
  isNumber,
  isVariable,
  isSameVariable,
  isSum,
  makeSum,
  addend,
  augend,
  isProduct,
  makeProduct,
  multiplier,
  multiplicand,
  makeExp,
  isExp,
  base,
  exponent,
  deriv,
  error,
};
