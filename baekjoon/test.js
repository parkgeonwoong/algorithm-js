const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  let answer = n.map(([a, b]) => {
    if (b % a === 0) return "factor";
    if (a % b === 0) return "multiple";
    return "neither";
  });
  return answer.join("\n");
}
console.log(solution(input));
