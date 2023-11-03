const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

function solution(input) {
  const dp = Array.from({ length: input + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
    }
  }
  return dp[input];
}

console.log(solution(input));
