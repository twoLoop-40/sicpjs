function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

test(0, p());

// p() 부터 평가 해서 무한루프 발생 즉 인수 우선 평가
