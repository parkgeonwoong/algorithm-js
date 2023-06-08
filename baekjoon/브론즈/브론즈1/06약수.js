/**
 * 1037
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .flat();

console.log(input);

function solution(input) {
  const min = Math.min(...input);
  const max = Math.max(...input);

  return input.length >= 2 ? min * max : min * min;
}

console.log(solution(input));
