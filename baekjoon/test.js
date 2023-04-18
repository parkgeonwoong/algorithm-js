const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => (isNaN(v) ? v : +v));

console.log(input);

function solution(str) {
  let answer = [];
  for (let x of str) {
    if (isNaN(x)) answer.push(x.slice(0, 1) + x.slice(-1));
  }
  return answer.join("\n");
}
console.log(solution(input));
