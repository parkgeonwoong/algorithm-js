const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

function solution(input) {
  const dp = [0, 1, 2, 4]; // 만들 수 있는 방법 갯수
  const answer = [];

  for (const x of input) {
    for (let i = 4; i <= x; i++) {
      if (dp[x] !== undefined) continue;
      // 4는 3에서 1을 더해서 만들수 있고, 2에서 2를 더해서 만들고, 1에서 3을 더해서 만들수 있음
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]; // 4 => 3+1, 2+2, 1+3
    }
    answer.push(dp[x]);
  }
  return answer.join("\n");
}

console.log(solution(input));
