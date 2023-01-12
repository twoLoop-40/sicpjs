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
