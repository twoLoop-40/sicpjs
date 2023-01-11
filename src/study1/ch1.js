const inc = (n) => n + 1;
const dec = (n) => n - 1;
const isEven = (n) => n % 2 === 0;
const square = (n) => n * n;
const double = (n) => n * 2;
const halve = (n) => {
  return n % 2 === 0 ? n / 2 : Error(`halve: ${n} is not even`);
};

export { isEven, inc, dec, square, double, halve };
