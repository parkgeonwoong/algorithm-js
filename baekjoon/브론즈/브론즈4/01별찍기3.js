/**
 * 2440
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();

console.log(Number(input));

// repeat
function solution(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

// 이중 for문
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      answer += "*";
    }
    answer += "\n";
  }
  return answer;
}
console.log(solution(Number(input)));
