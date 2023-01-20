import { pair, head, tail, list, display_list as displayList } from 'sicp';

function reverse(l) {
  function reverseIter(l, result) {
    return l === null ? result : reverseIter(tail(l), pair(head(l), result));
  }
  return reverseIter(l, null);
}

displayList(reverse(list(1, 2, 3, 4, 5)));
