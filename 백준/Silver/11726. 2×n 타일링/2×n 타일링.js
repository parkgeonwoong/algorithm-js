const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(n) {
  const memo = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    if (memo[i] !== undefined) continue;
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }

  return memo[n];
}

console.log(solution(input));
