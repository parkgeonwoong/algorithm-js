/**
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
 *
 * 문자열 for문으로 돌려서 조건문에 따라 수정가능하고,
 * replace로 대체 해버려도 가능
 */

const arr = "BANANA";

function solution(arr) {
  const answer = arr.replace(/A/gi, "#");
  console.log(answer);
}

solution(arr);
