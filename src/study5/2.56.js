const {
  makeExp,
  makeProduct,
  exponent,
  base,
  isNumber,
  isVariable,
  isSameVariable,
  addend,
  augend,
  isSum,
  makeSum,
  isProduct,
  multiplier,
  multiplicand,
  isExp,
  error,
} = require('.');

function derivExp(exp) {
  makeProduct(
    makeProduct(exponent(exp), makeExp(base(exp), exponent(exp) - 1)),
    deriv(base(exp))
  );
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
    : isExp(exp)
    ? derivExp(exp)
    : error(exp, 'unknown expression type -- deriv');
}

module.exports = {
  deriv,
};
