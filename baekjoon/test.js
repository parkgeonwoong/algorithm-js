const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

let memo = [0, 1];

function fibo(n) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));
  return memo[n];
}

function solution(input) {
  return fibo(input).toString();
}

console.log(solution(input));
