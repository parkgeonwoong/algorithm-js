const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();


function solution(input) {
  const dp = [1, 3];

  for (let i = 2; i < input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  return dp[input - 1];
}

console.log(solution(input));
