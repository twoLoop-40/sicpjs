class MultPair {
  private readonly row: number;
  private readonly col: number;
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  timeString() {
    return `${this.row} x ${this.col}`;
  }

  value() {
    return this.row * this.col;
  }
}

function enumerateInterval(low: number, high: number) {
  const intervalLength = high - low + 1;
  return intervalLength <= 0
    ? null
    : Array.from({ length: intervalLength }, (_, i) => low + i);
}
function isNotNull<T>(item: T | null): item is T {
  return item !== null;
}

function makeRowOfMultPairs(row: number) {
  const interval = enumerateInterval(1, 9);

  return isNotNull<number[]>(interval)
    ? interval.map((col) => new MultPair(row, col))
    : null;
}

function handleMakeArray<T, U>(handler: (arg: T) => U) {
  return (makeArray: (arg0: number) => T[] | null) => (arg: number) => {
    const arrayResult = makeArray(arg);
    return isNotNull<T[]>(arrayResult) ? arrayResult.map(handler) : null;
  };
}

function accumulateArray<T>(combine: (arg0: T, arg1: T) => T) {
  return (array: T[] | null) =>
    isNotNull<T[]>(array)
      ? array.reduce((prev, curr) => combine(prev, curr))
      : null;
}
function getTimeString(multPair: MultPair) {
  return `${multPair.timeString()} = ${multPair.value()}`;
}

function main() {
  const from1To9 = enumerateInterval(1, 9);
  const makeMultTable = handleMakeArray(getTimeString);
  const rowToString = accumulateArray<string>(
    (prev, curr) => `${prev}   ${curr}`
  );
  from1To9
    ?.map((row: number) => rowToString(makeMultTable(makeRowOfMultPairs)(row)))
    .forEach((multTableRow) => {
      console.log(multTableRow);
    });
}

main();
