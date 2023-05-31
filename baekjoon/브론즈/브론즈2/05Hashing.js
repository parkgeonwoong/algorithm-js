/**
 * 15829
 * 1. 소수이자 가장 큰 수 M으로 나눈 나머지로 계속 나눠야함
 * 2. 아스키코드 변환 charCodeAt() 변환
 */

// 50점
const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [, str] = input;
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    answer += (str[i].charCodeAt() - 96) * 31 ** i;
  }
  return answer;
}
console.log(solution(input));

// 100점
function solution(input) {
  const [, str] = input;
  const M = 1234567891;
  let hash = 0;
  let r = 1;

  for (let i = 0; i < str.length; i++) {
    hash += (str[i].charCodeAt() - 96) * r;
    r *= 31;
    r %= M;
    hash %= M;
  }
  return hash;
}
console.log(solution(input));
