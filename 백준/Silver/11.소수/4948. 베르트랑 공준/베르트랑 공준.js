const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();

function solution(input) {
  const answer = [];

  for (let i of input) {
    const start = i + 1;
    const end = i * 2;
    let cnt = 0;

    for (let j = start; j <= end; j++) {
      isPrime(j) ? cnt++ : cnt;
    }
    answer.push(cnt);
  }

  return answer.join("\n");
}

// 소수 구하기
function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(solution(input));
