const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(n) {
  const [a, b, c] = n;

  if (a === b && a === c && b === c) return 10000 + a * 1000;
  if (a !== b || a !== c || b !== c) {
    if (a === b || a === c) return 1000 + a * 100;
    if (b === c) return 1000 + b * 100;
  }

  if (a !== b && a !== c && b !== c) return Math.max(...n) * 100;
}
console.log(solution(input));
