import { pair, head, tail } from 'sicp';
import { average } from '../study2/index.js';
import { printPoint } from './index.js';

function makeSegment(s, e) {
  return pair(s, e);
}

function startSegment(s) {
  return head(s);
}

function endSegment(s) {
  return tail(s);
}

function makePoint(x, y) {
  return pair(x, y);
}

function xPoint(p) {
  return head(p);
}

function yPoint(p) {
  return tail(p);
}

function midPointSegment(s) {
  const start = startSegment(s);
  const end = endSegment(s);
  const midX = average(xPoint(start), xPoint(end));
  const midY = average(yPoint(start), yPoint(end));
  return makePoint(midX, midY);
}

export {
  makeSegment,
  startSegment,
  endSegment,
  makePoint,
  xPoint,
  yPoint,
  midPointSegment,
};
