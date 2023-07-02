const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(n) {
  const [a, b] = n;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcd = (a, b) => (a * b) / gcd(a, b);

  return lcd(a, b);
}

console.log(solution(input));
