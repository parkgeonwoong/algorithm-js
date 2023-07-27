const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const [N, ...arr] = input;
  const dp = Array.from({ length: N }, () => 0); // 계단에 따른 최대값

  dp[0] = arr[0];
  dp[1] = Math.max(arr[0] + arr[1], arr[1]);
  dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

  for (let i = 3; i < N; i++) {
    // 마지막 계단 포함 (arr[i])
    // 연속된 3계단 X (dp[i-3])
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }

  return dp[N - 1];
}

console.log(solution(input));
