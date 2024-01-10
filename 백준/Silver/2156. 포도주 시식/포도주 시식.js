/**
 * 문제: 포도주 시식 (2156)
 * 다이나믹 dp[]가 최대값을 구하는 경우의 수가 3가지 인것을 파악
 * 1. dp[n-1] : n번째 포도주를 마시지 않는 경우
 * 2. dp[n-2] + n번째 포도주 : n번째 포도주를 마시고 n-2번째 포도주
 * 3. dp[n-3] + n-1번째 포도주 + n번째 포도주 : n번째 포도주를 마시고 연속3잔 안마시기(전전전으로)
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();
const formatInput = input.split("\n").map((v) => +v);

function solution(input) {
  const [n, ...wine] = input;
  const dp = [0, wine[0], wine[0] + wine[1]];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + wine[i - 1], dp[i - 3] + wine[i - 2] + wine[i - 1]);
  }

  return dp[n];
}

console.log(solution(formatInput));
