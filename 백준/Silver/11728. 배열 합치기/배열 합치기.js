const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .flat();

function solution(n) {
  return n.sort((a, b) => a - b).join(" ");
}

console.log(solution(input));
