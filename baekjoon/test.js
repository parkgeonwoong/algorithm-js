const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(input) {
  const [[N, k], [...arr]] = input;
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}
console.log(solution(input));
