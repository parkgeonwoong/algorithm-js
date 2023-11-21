const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

function solution(input) {
  return input.sort((a, b) => b - a).join("\n");
}

console.log(solution(input));