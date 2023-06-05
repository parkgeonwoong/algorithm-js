/**
 * 1159
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  const obj = {};

  for (let x of input) {
    obj[x[0]] = obj[x[0]] + 1 || 1;
  }

  const answer = Object.keys(obj)
    .filter((key) => obj[key] >= 5)
    .sort()
    .join("");
  return answer.length > 0 ? answer : "PREDAJA";
}

console.log(solution(input));
