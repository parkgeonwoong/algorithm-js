const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("")
  .map(Number);

function solution(n) {
  // 1. 30배수는 0을 포함하는가?
  if (!n.includes(0)) return -1;

  // 2. 각자리수 합이 3의 배수인가?
  const sum = n.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) return -1;

  // 3. 가장 큰 수
  return n.sort((a, b) => b - a).join("");
}

console.log(solution(input));
