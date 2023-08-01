const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const [T, ...arr] = input;
  const dp = [1, 1, 1, 2, 2, 3];
  const answer = [];

  for (let i = 0; i < T; i++) {
    const k = arr[i];

    for (let j = 6; j <= k; j++) {
      if (dp[j] !== undefined) continue;
      dp[j] = dp[j - 1] + dp[j - 5];
    }
    answer.push(dp[k - 1]);
  }

  return answer.join("\n");
}

console.log(solution(input));
