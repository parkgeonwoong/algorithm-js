const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));


function solution(input) {
  const [[n], [...arr]] = input;
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}

console.log(solution(input));
