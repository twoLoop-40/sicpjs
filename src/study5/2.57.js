const { tail, head } = require('sicp');

function makeSum(argList) {
  return pair('+', argList);
}

function augend(exp) {
  return makeSum(tail(tail(exp)));
}
