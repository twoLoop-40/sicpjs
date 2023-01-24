import { accumulate } from './index.js';
import { is_list as isList, map, list, display } from 'sicp';

function countLeaves(tree) {
  return accumulate(
    (thisBranch, acc) =>
      isList(thisBranch) ? acc + countLeaves(thisBranch) : acc + thisBranch,
    0,
    map((subtree) => (isList(subtree) ? countLeaves(subtree) : 1), tree)
  );
}

const x = list(list(1, 2, 3), list(3, 4), list(6));
display(countLeaves(x));
