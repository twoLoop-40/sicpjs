function recF(n) {
  return n < 3 && n >= 0 ? n : recF(n - 1) + 2 * recF(n - 2) + 3 * recF(n - 3);
}

function iterF(n) {
  const iter = (a, b, c, count) => {
    return count === 0 ? a : iter(b, c, 3 * a + 2 * b + c, count - 1);
  };
  return iter(0, 1, 2, n);
}

console.log(recF(4)); // 11
console.log(iterF(4)); // 11
