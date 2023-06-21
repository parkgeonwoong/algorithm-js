const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

function solution(input) {
  let answer = 0;

  for (let x of input) {
    if (Math.abs(100 - answer) >= Math.abs(100 - (answer + x))) {
      answer += x;
    } else {
      break;
    }
  }
  return answer;
}
console.log(solution(input));
