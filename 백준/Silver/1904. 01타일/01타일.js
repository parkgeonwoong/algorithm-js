const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  const dp = [1, 2];

  for (let i = 2; i < input; i++) {
    dp[i] = (BigInt(dp[i - 1]) + BigInt(dp[i - 2])) % 15746n;
  }

  return String(dp[input - 1]);
}

console.log(solution(input));
