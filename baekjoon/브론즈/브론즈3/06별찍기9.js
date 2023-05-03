/**
 * 2446
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function solution(n) {
  let answer = "";
  for (let i = n; i >= 1; i--) {
    answer += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  for (let i = 2; i <= n; i++) {
    answer += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return answer;
}
console.log(solution(input));
