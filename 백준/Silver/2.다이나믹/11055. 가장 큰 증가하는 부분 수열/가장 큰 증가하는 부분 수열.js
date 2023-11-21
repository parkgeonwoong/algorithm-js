const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], [...arr]] = input;
  const dp = [];

  // 2차원을 생각해야한다.
  for (let i = 0; i < n; i++) {
    let max = 0;
    let maxIndex = -1;

    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) {
        max = dp[j];
        maxIndex = j;
      }
    }
    // 가장 큰 부분 수열을 찾은 경우
    if (maxIndex !== -1) {
      dp[i] = dp[maxIndex] + arr[i];
    }
    // 새로운 부분 수열을 시작
    else {
      dp[i] = arr[i];
    }
  }

  return Math.max(...dp);
}

console.log(solution(input));
