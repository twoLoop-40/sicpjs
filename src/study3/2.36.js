const {
  is_null: isNull,
  accumulate,
  head,
  pair,
  list,
  map,
  tail,
  display_list: displayList,
} = require('sicp');

function accumulateN(op, init, seqs) {
  return isNull(head(seqs))
    ? null
    : pair(
        accumulate(op, init, map(head, seqs)),
        accumulateN(op, init, map(tail, seqs))
      );
}

const x = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9));

displayList(accumulateN((a, b) => a + b, 0, x));
