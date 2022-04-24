function aPlusAbsB(a, b) {
    var plus = function (a, b) {
        return a + b;
    };
    var minus = function (a, b) {
        return a - b;
    };
    return (b >= 0
        ? plus
        : minus)(a, b);
}
console.log(aPlusAbsB(7, -2));
