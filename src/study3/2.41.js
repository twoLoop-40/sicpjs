const {
  map,
  pair,
  head,
  is_pair: isPair,
  display_list: displayList,
  list,
  filter,
  tail,
} = require('sicp');
const { enumerateInterval, flatmap } = require('.');

function uniqueTriples(n) {
  function addSmallNumberToList(list) {
    const lastNumber = isPair(list) ? head(list) : list;
    return map((i) => pair(i, list), enumerateInterval(1, lastNumber - 1));
  }
  return flatmap(
    addSmallNumberToList,
    flatmap(
      addSmallNumberToList,
      map((i) => list(i), enumerateInterval(1, n))
    )
  );
}

function findTripleSummingTo(s, n) {
  return filter(
    (triple) =>
      head(triple) + head(tail(triple)) + head(tail(tail(triple))) === s,
    uniqueTriples(n)
  );
}

displayList(findTripleSummingTo(10, 10));
