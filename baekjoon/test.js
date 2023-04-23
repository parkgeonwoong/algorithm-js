const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

// console.log(input);

function solution(s) {
  return s
    .slice(0, -1)
    .map((v) => v.reverse().join(""))
    .join("\n");
}
console.log(solution(input));
