/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */

function solution(str) {
  if (str.length % 2 === 1) {
    return str[Math.floor(str.length / 2)];
  } else {
    return [str[str.length / 2 - 1], str[str.length / 2]].join(" ");
  }
}

console.log(solution("study"));
console.log(solution("good"));
