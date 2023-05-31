/**
 * 9012
 * 1. ) 이것만 있을 경우 예외처리
 * 2. 중복 answer.push 방지 flag
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  let answer = [];

  for (let x of input) {
    let stack = [];
    let flag = true;

    for (let i of x) {
      if (i === "(") stack.push(i);
      else {
        if (stack.length === 0) {
          answer.push("NO");
          flag = false;
          break;
        }
        stack.pop();
      }
    }

    if (!flag) continue;

    answer.push(stack.length === 0 ? "YES" : "NO");
  }

  return answer.join("\n");
}
console.log(solution(input));
