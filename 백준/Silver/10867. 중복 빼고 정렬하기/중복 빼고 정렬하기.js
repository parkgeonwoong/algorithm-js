const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .flat();

function solution(input) {
  return input
    .filter((v, i) => input.indexOf(v) === i)
    .sort((a, b) => a - b)
    .join(" ");
}

console.log(solution(input));
