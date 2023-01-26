const { map, list, display_list: displayList } = require('sicp');
const { enumerateInterval, flatmap } = require('.');

function uniquePairs(n) {
  function pairWith(i) {
    return map((j) => list(i, j), enumerateInterval(1, i - 1));
  }
  return flatmap(pairWith, enumerateInterval(1, n));
}

displayList(uniquePairs(5));
