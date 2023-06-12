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
