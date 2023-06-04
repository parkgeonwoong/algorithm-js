const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .split("\n")
  .map(Number);

console.log(input);

function solution(input) {
  let answer = 0;
  const [n, f] = input;
  const tempN = Math.floor(n / 100) * 100;

  for (let i = 0; i < 100; i++) {
    if ((tempN + i) % f === 0) {
      if (i < 10) return "0" + i;
      return i;
    }
  }
}

console.log(solution(input));
