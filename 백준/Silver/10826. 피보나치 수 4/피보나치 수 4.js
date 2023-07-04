const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  const memo = [0n, 1n];

  for (let i = 2; i <= input; i++) {
    memo[i] = BigInt(memo[i - 1] + memo[i - 2]);
  }

  return memo[input].toString();
}

console.log(solution(input));

// function fibo(n) {
//   if (memo[n] !== undefined) return memo[n];
//   memo[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));
//   return memo[n];
// }

// return fibo(input).toString();
