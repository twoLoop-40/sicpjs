function pascalTriangle(a, b) {
  return b === 0 || b === a
    ? 1
    : pascalTriangle(a - 1, b - 1) + pascalTriangle(a - 1, b);
}

console.log(pascalTriangle(5, 2));
