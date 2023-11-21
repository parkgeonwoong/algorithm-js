const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, target], [...arr]] = input;
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr[N - 1];
  let answer = 0;

  // 이진탐색
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 절단기높이
    let sum = 0; // 잘린나무길이 합
    arr.forEach((v) => {
      if (v > mid) sum += v - mid;
    });

    if (sum >= target) {
      if (mid > answer) answer = mid;
      left = mid + 1; // 절단기를 높여서 잘린나무들을 적게하기위해
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(input));
