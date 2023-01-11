function isGoodEnough(guess, x, toleranceRatio) {
  const numberByRatio = (ratio) => (num) => num * ratio;
  const delta = numberByRatio(toleranceRatio);
  const abs = (num) => (num < 0 ? -num : num);
  return abs(guess - x) < delta(guess);
}

console.log(isGoodEnough(1, 2)); // false
console.log(isGoodEnough(1, 1.001)); // true
console.log(isGoodEnough(1, 1.02)); // false
