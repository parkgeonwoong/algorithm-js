/**
 * 2455
 *
 * answer은 최댓값 인원수를 구해야하기 때문에 새로운 변수를 만들어서 max값을 구해야 한다.
 * answer로 max를 비교하면 안됨
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  let answer = 0;
  let sum = 0;

  n.forEach((v) => {
    sum += v[1] - v[0];
    answer = Math.max(sum, answer);
  });

  return answer;
}
console.log(solution(input));
