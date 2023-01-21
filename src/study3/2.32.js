import {
  is_null as isNull,
  append,
  tail,
  list,
  head,
  map,
  display_list as displayList,
  pair,
} from 'sicp';

function subsets(s) {
  if (isNull(s)) {
    return list(null);
  } else {
    const rest = subsets(tail(s));
    return append(
      rest,
      map((subrest) => pair(head(s), subrest), rest)
    );
  }
}

displayList(subsets(list(1, 2, 3)));
