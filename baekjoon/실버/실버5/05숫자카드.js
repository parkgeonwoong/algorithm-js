/**
 * 10815
 *
 * 1. 배열 includes로 찾기 O(n) -> 시간초과
 * 2. 이진탐색 O(logn)
 * 3. Set O(1)
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(input) {
  const answer = [];
  const N = new Set(input[1]);
  const M = input[3];

  for (let x of M) {
    answer.push(N.has(x) ? 1 : 0);
  }
  return answer.join(" ");
}
console.log(solution(input));

// 이진탐색
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return true;
    else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

function solution(input) {
  const answer = [];
  const N = input[1].sort((a, b) => a - b);
  const M = input[3];

  for (let x of M) {
    answer.push(binarySearch(N, x) ? 1 : 0);
  }
  return answer.join(" ");
}
