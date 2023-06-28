const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function lcd(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return (a * b) / gcd(a, b);
}

function solution(input) {
  const arr = new Set();
  const n = input.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      const first = lcd(input[i], input[j]);

      for (let k = j + 1; k < n; k++) {
        const second = lcd(first, input[k]);
        arr.add(second);
      }
    }
  }

  return Math.min(...arr);
}

console.log(solution(input));
