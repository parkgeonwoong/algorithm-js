const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const A = input[0].sort((a, b) => b - a);
  const B = input[1].sort((a, b) => a - b);
  const n = A.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}

console.log(solution(input));