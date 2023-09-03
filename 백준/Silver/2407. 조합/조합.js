const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [n, m] = input;
  const memo = Array.from(Array(101), () => Array(101).fill(0));

  function dfs(n, m) {
    if (memo[n][m] > 0) return memo[n][m];

    if (n === m || m === 0) return 1;
    else {
      return (memo[n][m] = BigInt(dfs(n - 1, m)) + BigInt(dfs(n - 1, m - 1)));
    }
  }

  return dfs(n, m).toString();
}

console.log(solution(input));
