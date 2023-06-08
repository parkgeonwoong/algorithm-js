/**
 * 1654
 * 처음 푼 방법
 * 1. 전체 합에서 원하는 갯수만큼 나눠서 범위를 설정
 * 2. 일일이 탐색하면서 최대값을 구함
 *
 * 시간초과로 다른방법 생각
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

console.log(input);

function solution(input) {
  const [k, n] = input[0].split(" ").map((v) => +v);
  const arr = input.slice(1).map((v) => +v);
  const avg = Math.floor(arr.reduce((a, b) => a + b, 0) / n);
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = avg - 1; i >= 1; i--) {
    let cnt = 0;
    for (let x of arr) {
      cnt += Math.floor(x / i);
    }
    if (cnt >= n && max < i) {
      max = i;
    }
  }
  return max;
}

console.log(solution(input));

// 이분탐색

function solution(input) {
  const [k, n] = input[0].split(" ").map((v) => +v);
  const arr = input.slice(1).map((v) => +v);
  const avg = Math.floor(arr.reduce((a, b) => a + b, 0) / n);

  let left = 1;
  let right = avg;
  let max = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;

    for (let x of arr) {
      cnt += Math.floor(x / mid);
    }

    if (cnt >= n) {
      max = Math.max(max, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
}
