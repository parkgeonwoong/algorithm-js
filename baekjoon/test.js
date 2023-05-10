const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(n) {
  const [a, b] = n;
  let answer = [];
  let i = 1;

  while (i <= a) {
    if (a % i === 0) answer.push(i);
    i++;
  }

  return answer[b - 1] ? answer[b - 1] : 0;
}
console.log(solution(input));
