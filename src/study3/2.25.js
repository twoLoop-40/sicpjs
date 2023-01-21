import { list, head, tail, display } from 'sicp';

const a = list(1, 3, list(5, 7), 9);

const sevenFromA = head(tail(head(tail(tail(a)))));

display(sevenFromA);

const b = list(list(7));

const sevenFromB = head(head(b));

display(sevenFromB);

const c = list(1, list(2, list(3, list(4, list(5, list(6, 7))))));

const sevenFromC = head(
  tail(head(tail(head(tail(head(tail(head(tail(head(tail(c)))))))))))
);

display(sevenFromC);
