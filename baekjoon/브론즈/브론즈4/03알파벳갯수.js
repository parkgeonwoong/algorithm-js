/**
 * 10808
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

console.log(input);
const alpha = "abcdefghijklmnopqrstuvwxyz";

function solution(n) {
  const cnt = Array.from({ length: 26 }, () => 0);
  n.forEach((i) => cnt[alpha.indexOf(i)]++);
  return cnt.join(" ");
}
console.log(solution(input));
