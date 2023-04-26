/**
 * 2442
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("")
  .map(Number);

console.log(input);

function solution(n) {
  let answer = [];
  let end = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    let cnt = 2 * i - 1;
    for (let j = 0; j < (end - cnt) / 2; j++) str += " ";
    for (let k = 0; k < cnt; k++) str += "*";
    for (let j = 0; j < (end - cnt) / 2; j++) str += " ";
    answer.push(str);
  }
  return answer.join("\n");
}

// 다른 풀이
function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return answer;
}
console.log(solution(input[0]));
