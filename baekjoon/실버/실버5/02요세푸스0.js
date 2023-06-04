/**
 * 11866
 * 처음에는 인덱스와 카운터로 구할려고 했으나 이해하기 어려운방식
 * 앞에서부터 맨뒤로 옮기면서 이중for문으로 가야한다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(input) {
  const [n, k] = input;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let answer = [];

  while (arr.length > 0) {
    for (let i = 1; i <= k; i++) {
      if (i === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }

  return `<${answer.join(", ")}>`;
}

console.log(solution(input));
