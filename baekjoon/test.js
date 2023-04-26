const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("")
  .map(Number);

console.log(input);

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return answer;
}
console.log(solution(input[0]));
