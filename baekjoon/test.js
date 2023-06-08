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
