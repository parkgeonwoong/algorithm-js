/**
 * 1373
 *
 * 2진수의 값이 너무 크다면 출력이 안됨 -> 3개씩 짤라서 바꿔줘야한다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(input) {
  let answer = "";

  while (input.length >= 3) {
    answer = parseInt(input.slice(input.length - 3), 2).toString(8) + answer;
    input = input.slice(0, input.length - 3);
  }

  answer = (input ? parseInt(input, 2).toString(8) : "") + answer;
  return answer;
}

console.log(solution(input));
