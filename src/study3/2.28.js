import {
  is_list as isList,
  append,
  head,
  tail,
  list,
  display_list as displayList,
  is_null as isNull,
} from 'sicp';

function fringe(l) {
  return isNull(l)
    ? l
    : isList(l)
    ? append(fringe(head(l)), fringe(tail(l)))
    : list(l);
}

const x = list(list(1), list(2), list(3, 4));

displayList(fringe(x));
displayList(fringe(list(x, x)));
