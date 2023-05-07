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
