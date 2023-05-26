/**
 * 1009
 * 거듭제곱 메소드를 사용하면 값이 너무 커져서 초과 -> 일의 자리만 따져봄
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    const [a, b] = x;
    let n = 1;
    for (let i = 0; i < b; i++) {
      n = (n * a) % 10;
    }
    n === 0 ? answer.push(10) : answer.push(n);
  }
  return answer.join("\n");
}
console.log(solution(input));
