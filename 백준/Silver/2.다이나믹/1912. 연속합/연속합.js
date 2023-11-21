const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], [...arr]] = input;
  const dp = [arr[0]];

  for (let i = 1; i < n; i++) {
    // 현재 높은합 = 전 높은합 + 현재값, 현재값 비교
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }

  return Math.max(...dp);
}

console.log(solution(input));
