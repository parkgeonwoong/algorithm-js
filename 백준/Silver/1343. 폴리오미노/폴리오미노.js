/**
 * 정규표현식으로 생각해보기
 * - 특정값으로 대체하는데 정해져있고, 문자열
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  input = input.replace(/XXXX/g, "AAAA");
  input = input.replace(/XX/g, "BB");
  return input.includes("X") ? -1 : input;
}

console.log(solution(input));