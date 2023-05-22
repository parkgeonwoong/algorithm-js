const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .flat();

console.log(input);

function solution(arr) {
  let answer = 0;

  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return true;
  };

  for (let x of arr) {
    isPrime(x) ? answer++ : null;
  }
  return answer;
}
console.log(solution(input));
