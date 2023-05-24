/**
 * 1920
 * 시간초과
 */

// 시간초과
const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  let answer = [];
  const [, N, , M] = arr;
  for (let x of M) {
    N.includes(x) ? answer.push(1) : answer.push(0);
  }
  return answer.join("\n");
}

console.log(solution(input));

// Set으로 품

function solution(arr) {
  const [, N, , M] = arr;
  const nSet = new Set(N);
  const answer = [];

  for (let x of M) {
    answer.push(nSet.has(x) ? 1 : 0);
  }

  return answer.join("\n");
}
