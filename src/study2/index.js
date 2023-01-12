function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function isPrime(n) {
  function iter(i) {
    return i === n ? true : n % i === 0 ? false : iter(i + 1);
  }
  return iter(2);
}
export { sum, isPrime };
