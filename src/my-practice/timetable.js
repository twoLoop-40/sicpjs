var MultPair = /** @class */ (function () {
    function MultPair(row, col) {
        this.row = row;
        this.col = col;
    }
    MultPair.prototype.timeString = function () {
        return "".concat(this.row, " x ").concat(this.col);
    };
    MultPair.prototype.value = function () {
        return this.row * this.col;
    };
    return MultPair;
}());
function enumerateInterval(low, high) {
    var intervalLength = high - low + 1;
    return intervalLength <= 0
        ? null
        : Array.from({ length: intervalLength }, function (_, i) { return low + i; });
}
function isNotNull(item) {
    return item !== null;
}
function makeRowOfMultPairs(row) {
    var interval = enumerateInterval(1, 9);
    return isNotNull(interval)
        ? interval.map(function (col) { return new MultPair(row, col); })
        : null;
}
function handleMakeArray(handler) {
    return function (makeArray) { return function (arg) {
        var arrayResult = makeArray(arg);
        return isNotNull(arrayResult) ? arrayResult.map(handler) : null;
    }; };
}
function accumulateArray(combine) {
    return function (array) {
        return isNotNull(array)
            ? array.reduce(function (prev, curr) { return combine(prev, curr); })
            : null;
    };
}
function getTimeString(multPair) {
    return "".concat(multPair.timeString(), " = ").concat(multPair.value());
}
function main() {
    var from1To9 = enumerateInterval(1, 9);
    var makeMultTable = handleMakeArray(getTimeString);
    var rowToString = accumulateArray(function (prev, curr) { return "".concat(prev, "   ").concat(curr); });
    from1To9 === null || from1To9 === void 0 ? void 0 : from1To9.map(function (row) { return rowToString(makeMultTable(makeRowOfMultPairs)(row)); }).forEach(function (multTableRow) {
        console.log(multTableRow);
    });
}
main();
