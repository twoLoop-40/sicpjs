function accumulate(combiner, nullValue, term, a, next, b) {
  return a > b
    ? nullValue
    : combiner(
        term(a),
        accumulate(combiner, nullValue, term, next(a), next, b)
      );
}

function accumulateIter(combiner, nullValue, term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), combiner(result, term(a)));
  }
  iter(a, nullValue);
}

function sum(term, a, next, b) {
  return accumulate((x, y) => x + y, 0, term, a, next, b);
}

function productIter(term, a, next, b) {
  return accumulateIter((x, y) => x * y, 1, term, a, next, b);
}
