/**
 * 2530
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);
const [v, [time]] = input;

function solution(v, time) {
  let h = v[0];
  let m = v[1];
  let s = v[2];
  let sum = time + s;
  m = m + parseInt(sum / 60);
  sum %= 60;
  h = h + parseInt(m / 60);
  m %= 60;
  h %= 24;
  return [h, m, sum].join(" ");
}
console.log(solution(v, time));
