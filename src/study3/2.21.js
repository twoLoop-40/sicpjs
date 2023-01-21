import {
  is_null as isNull,
  pair,
  head,
  tail,
  display_list as displayList,
  map,
  list,
} from 'sicp';
import { square } from '../study1/index.js';

function squareList(l) {
  return isNull(l) ? l : pair(square(head(l)), squareList(tail(l)));
}

function squareListMap(l) {
  return map(square, l);
}

displayList(squareListMap(list(1, 2, 3, 4, 5)));
displayList(squareList(list(5, 6, 7, 8, 9)));
