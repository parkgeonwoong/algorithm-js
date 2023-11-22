/**
 * 문제: RGB거리 (1149)
 * 다이나믹을 2차원배열로 풀어야하는 문제
 * 주어진 rgb줄의 두번째 줄부터 이전 줄의 색과 겹치지 않게 칠하는 비용의 최솟값을 구하는 문제
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));

function solution(input) {
  const [[N], ...rgb] = input;
  const dp = Array.from({ length: N }, () => Array(3).fill(0));
  dp[0] = rgb[0];

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2];
  }

  return Math.min(...dp[N - 1]);
}

console.log(solution(input));
