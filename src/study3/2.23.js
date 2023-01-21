import { is_null as isNull, head, tail } from 'sicp';

function forEach(fun, items) {
  if (isNull(items)) {
    return null;
  } else {
    fun(head(items));
    forEach(fun, tail(items));
  }
}
