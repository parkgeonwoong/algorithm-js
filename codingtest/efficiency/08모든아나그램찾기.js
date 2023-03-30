/**
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 */

// 내가 푼 방법
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    let temp = [];

    for (let j = i; j < i + b.length; j++) {
      temp.push(a[j]);
    }
    if (temp.sort().join("") === b) answer++;
  }

  return answer;
}
let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
