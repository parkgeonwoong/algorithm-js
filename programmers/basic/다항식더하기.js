/**
 * @desc : 내가 푼 방식
 * - 알고리즘, 규칙이 보이지 않아 차근차근 진행하는 방식
 * - 계속 분리하면서 계산하는 방식으로 진행 (주먹구구식)
 */

function solution(polynomial) {
  let xCnt = 0;
  let cnt = 0;

  // 1. 입력값을 + 공백을 기준으로 분리한다.
  let arr = polynomial.split(" + ");

  // 2. [x가 있는것]과 [상수]가 있는 것을 구분한다.
  // 2-1. x가 있으면 arr에 남기고, 상수는 cnt에 더한다.
  arr = arr.filter((v) => {
    if (v.includes("x")) {
      return v;
    } else {
      cnt += Number(v);
    }
  });

  // 2-2. [x가 있는것] x는 1x로 바꿔준다
  arr = arr.map((v) => (v === "x" ? "1x" : v));

  // 2-3. [x가 있는것] x를 기준으로 분리한다.
  arr = arr.join("").split("x").splice(0, arr.length);

  // 2-4. [x가 있는것] x의 값 구한다.
  arr.forEach((item) => (xCnt += Number(item)));

  const answer = `${
    xSum
      ? xSum === 1
        ? "x" + (cnt ? " + " + cnt : "")
        : xSum + "x" + (cnt ? " + " + cnt : "")
      : "" + (cnt ? cnt : "")
  }`;

  return answer;
}

/**
 * @desc : 리팩토링 겸 다시 풀기
 * - x계산, 상수계산을 분리하되, 합계산이니까 reduce를 사용한다.
 * - FIXME: 합치는 경우 조건문을 어떻게 고칠지 난해하다.
 */

function solution(polynomial) {
  const arr = polynomial.split(" + ");

  // 1. x계산
  const xSum = arr.reduce((acc, cur) => {
    if (cur === "x") return acc + 1;
    if (cur.includes("x")) return acc + Number(cur.replace("x", ""));
    return acc;
  }, 0);

  // 2. 상수계산
  const cnt = arr.reduce((acc, cur) => {
    if (!cur.includes("x")) return acc + Number(cur);
    return acc;
  }, 0);

  // 3. 합치기
  const answer = `${
    xSum
      ? xSum === 1
        ? "x" + (cnt ? " + " + cnt : "")
        : xSum + "x" + (cnt ? " + " + cnt : "")
      : "" + (cnt ? cnt : "")
  }`;

  return answer;
}

solution("x + 9x ");
solution("2 + 1");
