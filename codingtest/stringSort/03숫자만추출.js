/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
 * 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.
 */

function solution(str) {
  const num = str.replaceAll(/[^0-9]/g, "");
  return Number(num);
}

function solution(str) {
  let answer = 0;

  for (let i of str) {
    if (!isNaN(i)) answer = answer * 10 + parseInt(i);
  }
  return answer;
}

let str = "tge0a1h205er";

console.log(solution(str));
