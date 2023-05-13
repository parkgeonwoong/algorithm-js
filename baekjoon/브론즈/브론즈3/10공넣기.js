/**
 * 10810
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  const [[N, M], ...rest] = arr;
  const answer = Array.from({ length: N + 1 }, () => 0);

  for (let a = 0; a < M; a++) {
    const [i, j, k] = rest[a];
    for (let b = i; b <= j; b++) {
      answer[b] = k;
    }
  }
  answer.shift();
  return answer.join(" ");
}
console.log(solution(input));
