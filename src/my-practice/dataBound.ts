const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

type BinaryOp = (a: number, b: number) => number;
const double = (adder: BinaryOp) => (a: number, b: number) => {
  return adder(a, b) * 2;
};
const addOps =
  (...ops: BinaryOp[]) =>
  (a: number, b: number) => {
    return ops.map((op) => op(a, b)).reduce((prev, curr) => prev + curr, 0);
  };

const push = (n: number) => (higherOp: (argOp: BinaryOp) => BinaryOp) => {
  return (op: BinaryOp) => {
    let result = op;
    for (let i = 0; i < n; i++) {
      result = higherOp(result);
    }
    return result;
  };
};

const triplePush = push(3);

const tripleDouble = triplePush(double);

const doubleAdd = double(add);
const addPlusAndMinus = addOps(add, subtract);
