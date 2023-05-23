const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

function solution(arr) {
  const [m, n] = arr;
  let temp = [];

  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      temp.push(i);
    }
  }

  if (temp.length === 0) return -1;

  return [temp.reduce((a, b) => a + b, 0), Math.min(...temp)].join("\n");
}
console.log(solution(input));
