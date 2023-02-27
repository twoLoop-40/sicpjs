const { tail, head, pair, list } = require('sicp');

function makeSum(argList) {
  return pair('+', argList);
}

function augend(exp) {
  return makeSum(tail(tail(exp)));
}
