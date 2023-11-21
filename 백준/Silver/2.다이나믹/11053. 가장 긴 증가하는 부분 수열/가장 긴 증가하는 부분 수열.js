const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], [...arr]] = input;
  const dp = Array.from({ length: n }, () => 0);

  // 현재값
  for (let i = 0; i < n; i++) {
    let maxCnt = 0; // 최대 수열의 길이 가져오기

    // 과거값
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] > maxCnt) {
        maxCnt = dp[j];
      }
    }

    // 수열이 만들어졌으므로 +1
    dp[i] = maxCnt + 1;
  }
  return Math.max(...dp);
}

console.log(solution(input));
