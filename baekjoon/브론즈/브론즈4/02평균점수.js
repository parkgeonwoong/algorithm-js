/**
 * 10039
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

// 내가푼방법
function solution(n) {
  let arr = [];
  for (let x of n) {
    if (x < 40) arr.push(40);
    else arr.push(x);
  }
  let answer = arr.reduce((a, b) => a + b, 0) / arr.length;
  return answer;
}

// 다른사람풀이
function solution(n) {
  let answer = 0;
  for (let x of n) {
    let score = x;
    if (x < 40) score = 40;
    answer += score;
  }

  return answer / n.length;
}
console.log(solution(input));
