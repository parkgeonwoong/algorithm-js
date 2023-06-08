/**
 * 1874
 *
 * 1. 스택에 넣고 빼서 수열을 만듬
 * 2. 넣을 때 오름차순
 * 3. 입력을 만들 수 있는가?
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.log(input);

function solution(input) {
  const answer = [];
  const stack = [];

  let stackNum = 1;

  for (let i = 0; i < input.length; i++) {
    const num = input[i];

    while (stackNum <= num) {
      stack.push(stackNum++);
      answer.push("+");
    }

    const stackPop = stack.pop();
    answer.push("-");

    if (num !== stackPop) {
      return "NO";
    }
  }
  return answer.join("\n");
}

console.log(solution(input));
