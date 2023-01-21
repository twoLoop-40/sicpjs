import {
  list,
  head,
  tail,
  display_list as displayList,
  pair,
  is_null as isNull,
  is_pair as isPair,
} from 'sicp';

function reverse(l) {
  function iterReverse(l, reversed) {
    return isNull(l) ? reversed : iterReverse(tail(l), pair(head(l), reversed));
  }
  return iterReverse(l, null);
}

function deepReverse(ll) {
  return isPair(ll)
    ? reverse(pair(deepReverse(head(ll)), deepReverse(tail(ll))))
    : ll;
}

const x = list(list(1, 2), list(3, 4));

displayList(reverse(x));
displayList(deepReverse(x));
