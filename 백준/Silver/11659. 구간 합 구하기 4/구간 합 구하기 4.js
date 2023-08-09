/**
 * 시간초과 발생 -> 누적합방식 -> 누적된 배열을 만들어서 찾는방식
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [N, M] = input.shift();
  const arr = input.shift();
  const sumArr = Array.from({ length: N + 1 }, () => 0); // 누적합 배열
  const answer = [];

  // 누적합배열 계산
  arr.forEach((v, i) => {
    sumArr[i + 1] = sumArr[i] + v;
  });

  // 누적합은 = j누적합 - (i-1)누적합
  input.forEach(([start, end]) => {
    answer.push(sumArr[end] - sumArr[start - 1]);
  });

  return answer.join("\n");
}

console.log(solution(input));
