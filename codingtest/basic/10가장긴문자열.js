/**
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 */

let str = ["teacher", "time", "student", "beautiful", "good"];

function solution(str) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i of str) {
    if (i.length > max) {
      max = i.length;
      answer = i;
    }
  }

  return answer;
}

solution(str);
