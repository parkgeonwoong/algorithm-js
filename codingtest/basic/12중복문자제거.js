/**
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
 *
 * @추가
 * - 인덱스로도 찾을 수 있다. → 인덱스를 찾는 것으로 순회시 일치하지 않을 경우로
 */

function solution(str) {
  let answer = "";
  for (let i of str) {
    if (!answer.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(i) === i) answer += str[i];
  }
}

console.log(solution("ksekkset"));
console.log(solution("good"));
