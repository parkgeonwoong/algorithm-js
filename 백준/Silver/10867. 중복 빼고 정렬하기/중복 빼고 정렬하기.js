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
  const set = new Set();
  for (let x of input) {
    set.add(x);
  }
  return [...set].sort((a, b) => a - b).join(" ");
}

console.log(solution(input));