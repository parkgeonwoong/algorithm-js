/**
 * 1271번
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(n, m) {
  let answer = n / m + "\n";
  answer += n % m;

  return answer;
}
console.log(solution(input[0], input[1]));
