const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const a = new Set(input[0]);
  const b = new Set(input[1]);
  let sum = 0;

  a.forEach((v) => (!b.has(v) ? sum++ : sum));
  b.forEach((v) => (!a.has(v) ? sum++ : sum));
  return sum;
}

console.log(solution(input));
