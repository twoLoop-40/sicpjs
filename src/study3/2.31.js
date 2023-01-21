import {
  map,
  is_pair as isPair,
  list,
  display_list as displayList,
} from 'sicp';

function treeMap(f, tree) {
  return map(
    (subtree) => (!isPair(subtree) ? f(subtree) : treeMap(f, subtree)),
    tree
  );
}

function squareTree(tree) {
  return treeMap((x) => x * x, tree);
}

const aTree = list(1, list(2, list(3, 4), 5), list(6, 7));

displayList(squareTree(aTree));
