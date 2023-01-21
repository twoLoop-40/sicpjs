import {
  list,
  is_pair as isPair,
  is_null as isNull,
  map,
  pair,
  head,
  tail,
  display_list as displayList,
} from 'sicp';

function squareTree(tree) {
  return isNull(tree)
    ? null
    : !isPair(tree)
    ? tree * tree
    : pair(squareTree(head(tree)), squareTree(tail(tree)));
}

function squareTreeMap(tree) {
  return map(
    (subtree) =>
      !isPair(subtree) ? subtree * subtree : squareTreeMap(subtree),
    tree
  );
}

const aTree = list(1, list(2, list(3, 4), 5), list(6, 7));

displayList(squareTree(aTree));
displayList(squareTreeMap(aTree));
