/**
 * 10798
 *
 * 1. 세로로 읽기
 * 2. 없다면 공백처리
 *
 * 1. 가로 1번에 세로는 전체를 순회한다. 그러므로 for문을 반대로 생각
 * 2. 배열중 최대길이를 찾는다.
 * 3. answer에 붙일때 공백이면 undefined인데 || '' 이것으로 붙힌다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

console.log(input);

function solution(input) {
  let answer = "";
  const maxN = Math.max(...input.map((v) => v.length));

  for (let i = 0; i < maxN; i++) {
    for (let j = 0; j < input.length; j++) {
      answer += input[j][i] || "";
    }
  }
  return answer;
}
console.log(solution(input));
