function pair(x, y) {
  return (m) => m(x, y);
}

function car(z) {
  return z((p, q) => p);
}

function cdr(z) {
  return z((p, q) => q);
}

console.log(car(pair(1, 2)));
console.log(cdr(pair(1, 2)));
