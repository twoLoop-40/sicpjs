import { fastExpt } from '.';

function expmod(base, exp, m) {
  return fastExpt(base, exp) % m;
}

// 문제점 fastExpt의 리턴값이 너무 빨리 커져서 컴퓨터가 다를 수 있는 숫자를 넘어간다
