var a = 3;
var b = a + 1;
var c = (a > b
    ? a
    : a < b
        ? b
        : -1);
console.log(c);
