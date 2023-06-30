const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const copy = [...input].sort((a, b) => b - a);
  const maxFive = copy.slice(0, 5);
  const sum = maxFive.reduce((sum, v) => sum + v, 0);
  const quizNum = maxFive
    .map((v) => input.indexOf(v) + 1)
    .sort((a, b) => a - b);

  return sum + "\n" + quizNum.join(" ");
}

console.log(solution(input));
