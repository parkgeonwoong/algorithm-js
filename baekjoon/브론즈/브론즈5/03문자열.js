/**
 * 9086
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => (isNaN(v) ? v : +v));

console.log(input);

function solution(str) {
  let answer = [];
  for (let x of str) {
    for (let i = 0; i < x.length; i++) {
      answer.push(x[0] + x[x.length - 1]);
      break;
    }
  }
  return answer.join("\n");
}
console.log(solution(input));

// 다른 방법
function solution(str) {
  let answer = [];
  for (let x of str) {
    if (isNaN(x)) answer.push(x.slice(0, 1) + x.slice(-1));
  }
  return answer.join("\n");
}
console.log(solution(input));
