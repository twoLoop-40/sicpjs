const { isSameSign, mathAbs } = require('.');
const { pair } = require('sicp');

function makeRat(n, d) {
  isSameSign(n, d)
    ? pair(mathAbs(n), mathAbs(d))
    : pair(-mathAbs(n), mathAbs(d));
}

module.exports = makeRat;
