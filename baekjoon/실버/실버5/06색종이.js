/**
 * 2563
 * 문제점
 * - 300 - 겹치는 부분으로 구할려고 했으나 틀림 -> 조건이 너무많음
 * 해결
 * - 총넓이 배열을 만들어서 겹치는 부분을 모두 그려서 값을 구하는 방식
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

function solution(input) {
  let arr = Array.from({ length: 100 }, () => Array(100).fill(false));

  for (let i of input) {
    const [x, y] = i;

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        arr[x + j][y + k] = true;
      }
    }
  }
  return arr.reduce((acc, cur) => {
    for (let x of cur) {
      if (x) acc++;
    }
    return acc;
  }, 0);
}
console.log(solution(input));
