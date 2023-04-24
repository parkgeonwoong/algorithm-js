/**
 * 2525
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(s) {
  let answer = [];
  const [a, b] = s;
  const start = a[0] * 60 + a[1];
  const time = start + b[0];
  const m = time % 60;
  const h = parseInt(time / 60) % 24;

  answer.push(h, m);

  return answer.join(" ");
}
console.log(solution(input));
