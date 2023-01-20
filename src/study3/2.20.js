import { is_null as isNull, head, tail, display, list } from 'sicp';
function brooks(curried, argl) {
  return isNull(argl) ? curried : brooks(curried(head(argl)), tail(argl));
}

function brooksCurried(l) {
  return brooks(head(l), tail(l));
}

function curriedPlus(x) {
  return (y) => x + y;
}

display(brooks(curriedPlus, list(1, 2)));
