const inc = (n) => n + 1;
const dec = (n) => n - 1;
const isEven = (n) => n % 2 === 0;
const square = (n) => n * n;
const double = (n) => n * 2;
const halve = (n) => {
  if (n % 2 !== 0) {
    throw new Error(`halve: ${n} is not even`);
  } else {
    return n / 2;
  }
};

function fastExpt(base, exp) {
  const iter = (base, exp, result) => {
    return exp === 0
      ? result
      : isEven(exp)
      ? iter(square(base), exp / 2, result)
      : iter(base, exp - 1, result * base);
  };

  return iter(base, exp, 1);
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : isEven(exp)
    ? square(expmod(base, halve(exp), m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

export { isEven, inc, dec, square, double, halve, expmod, fastExpt };
