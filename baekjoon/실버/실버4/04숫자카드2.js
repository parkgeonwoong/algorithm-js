/**
 * 10816
 * 1. 이중 for문은 시간초과 발생
 * 2. Map을 사용해서 빠르게 찾는 방법
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
  let answer = [];
  const [, n, , m] = input;
  const N = new Map();

  n.forEach((v) => {
    if (N.has(v)) {
      N.set(v, N.get(v) + 1);
    } else {
      N.set(v, 1);
    }
  });
  m.forEach((v) => answer.push(N.get(v) || 0));

  return answer.join(" ");
}
console.log(solution(input));
