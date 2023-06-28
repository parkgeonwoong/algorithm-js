const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n, k], [...arr]] = input;

  return arr.sort((a, b) => a - b)[k - 1];
}

console.log(solution(input));
