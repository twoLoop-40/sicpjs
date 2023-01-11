function conditional(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

console.log(conditional(2 === 3, 0, 5)); // 5

function sqrtIter(guess, x) {
  const isGoodEnough = (guess, x) => {};
  const improve = (guess, x) => {};
  return conditional(
    isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x)
  );
}

// conditianal 함수는 인수 우선 평가를 진행하므로
// sqrtIter 함수를 미리 호출하여 무한루프를 발생시킨다.
