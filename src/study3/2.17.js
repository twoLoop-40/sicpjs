import { tail, list } from 'sicp';
function lastPair(l) {
  return tail(l) === null ? l : lastPair(tail(l));
}

console.log(lastPair(list(1, 2, 3, 4, 5)));
