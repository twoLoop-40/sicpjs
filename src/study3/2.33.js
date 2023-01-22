import { accumulate } from './index.js';
import { pair, display, list } from 'sicp';

function map(f, sequence) {
  return accumulate((x, y) => pair(f(x), y), null, sequence);
}

function append(seq1, seq2) {
  return accumulate((x, y) => pair(x, y), seq2, seq1);
}

function length(sequence) {
  return accumulate((x, y) => y + 1, 0, sequence);
}

display(length(append(list(1, 2, 3), list(4, 5, 6))));
