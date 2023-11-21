const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(n) {
  const memo = [0, 4n, 6n];

  for (let i = 3; i <= 81; i++) {
    if (memo[i] !== undefined) continue;
    memo[i] = BigInt(memo[i - 1] + memo[i - 2]);
  }

  return memo[n].toString();
}

console.log(solution(input));
