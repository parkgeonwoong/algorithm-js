/**
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
 *
 * @내가푼방법
 * - 문자열을 순회를 돌면서 각각 대문자로 치환한것이랑 일치하는지 확인
 *
 * @남의생각
 * - 아스키코드 또한 생각할수 있었야 한다
 * - 대문자 : 65 ~ 90
 * - 소문자 : 97 ~ 122
 */

let str = "KoreaTimeGood";

function solution(str) {
  let answer = 0;
  for (let i of str) {
    if (i === i.toUpperCase()) answer++;
  }
  return answer;
}

function solution(str) {
  let answer;
  for (let i of str) {
    const num = i.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
}

solution(str);
