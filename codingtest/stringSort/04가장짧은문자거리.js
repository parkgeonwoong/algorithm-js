/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 *
 * 일단 어떻게 접근해야할지 모르겠다. 기준을 모르겠다.
 *
 * @로직
 * 1. 왼쪽에서부터 오른쪽으로 t로부터 거리를 구한다 (왼쪽 t기준점)
 * 2. 오른쪽에서부터 왼쪽으로 t로부터 거리를 구해서 더 작은값을 배열에 넣어준다
 */

function solution(str, t) {
  let answer = [];
  let p = 1000;
  const n = str.length;

  // 좌 -> 우
  for (let i = 0; i < n; i++) {
    if (str[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  // 우 -> 좌
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === t) p = 0;
    else {
      p++;
      if (answer[i] > p) answer[i] = p;
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
