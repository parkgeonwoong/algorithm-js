/**
 * 문제: 정수 삼각형 (1932)
 * 초기 다이나믹선정을 그대로 가져와야 할지 몰랐다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();
const formatInput = input.split("\n").map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], ...arr] = input;
  const dp = [...arr];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) dp[i][j] += dp[i - 1][j];
      else if (j === i) dp[i][j] += dp[i - 1][j - 1];
      else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }

  return Math.max(...dp[n - 1]);
}

console.log(solution(formatInput));
