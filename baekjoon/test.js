const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(n) {
  const [r1, avg] = n;
  let r2 = avg * 2 - r1;
  return r2;
}
console.log(solution(input));
