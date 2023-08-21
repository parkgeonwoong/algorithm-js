const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, K], [...arr]] = input;
  const answer = [];

  // 0~연속되는 마지막까지
  for (let i = 0; i <= N - K; i++) {
    let j = i;
    let temp = 0;

    // K(연속되는 몇일)까지 합
    while (j < K + i) {
      temp += arr[j++];
    }
    answer.push(temp);
  }

  return Math.max(...answer);
}

console.log(solution(input));
