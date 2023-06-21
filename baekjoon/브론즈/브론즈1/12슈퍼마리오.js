/**
 * 2851
 *
 * 접근
 * - 100에 가까운 값을 도출하기 위해서 어떤 생각을 해야하는가?
 * - |100-x|의 최소값을 구해야함
 * - 순회를 돌면서 값을 넣기 전과 넣은 후의 값을 비교해야함
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

function solution(input) {
  let answer = 0;

  for (let x of input) {
    if (Math.abs(100 - answer) >= Math.abs(100 - (answer + x))) {
      answer += x;
    } else {
      break;
    }
  }
  return answer;
}
console.log(solution(input));
