/**
 * 4949
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

console.log(input);

function opposite(temp) {
  return temp === ")" ? "(" : "[";
}

function solution(input) {
  const answer = [];

  for (let x of input) {
    const stack = [];
    let flag = true;

    for (let i of x) {
      if (i === ")" || i === "]") {
        if (stack[stack.length - 1] === opposite(i)) stack.pop();
        else flag = false;
      }

      if (i === "(" || i === "[") stack.push(i);
    }

    answer.push(flag && stack.length === 0 ? "yes" : "no");
  }
  return answer.join("\n");
}
console.log(solution(input));
