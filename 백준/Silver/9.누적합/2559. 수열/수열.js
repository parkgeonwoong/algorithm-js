const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, K], [...arr]] = input;
  const sum = [0];

  // 누적합
  for (let i = 1; i <= N; i++) {
    sum[i] = sum[i - 1] + arr[i - 1];
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = K; i <= N; i++) {
    max = Math.max(max, sum[i] - sum[i - K]);
  }
  return max;
}

console.log(solution(input));

/**
 * 풀었던 방법 -> 시간이 너무 큼
 */
// function solution(input) {
//   const [[N, K], [...arr]] = input;
//   const answer = [];

//   // 0~연속되는 마지막까지
//   for (let i = 0; i <= N - K; i++) {
//     let j = i;
//     let temp = 0;

//     // K(연속되는 몇일)까지 합
//     while (j < K + i) {
//       temp += arr[j++];
//     }

//     answer.push(temp);
//   }
//   return Math.max(...answer);
// }
