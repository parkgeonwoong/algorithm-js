/**
 * 1010
 *
 * 1. 메모이제이션
 * 2. 조합 (콤비네이션)
 *
 * 순열 = 순서 O, nPr
 * 조합 = 순서 X, nCr
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

const Combi = (n, r, memo) => {
  if (memo[n][r] > 0) return memo[n][r];

  if (n === r || r === 0) return 1;
  else {
    memo[n][r] = Combi(n - 1, r, memo) + Combi(n - 1, r - 1, memo);
    return memo[n][r];
  }
};

function solution(input) {
  const answer = [];

  for (let x of input) {
    const [N, M] = x;
    let memo = Array.from({ length: 30 }, () => Array(30).fill(0));
    answer.push(Combi(M, N, memo));
  }
  return answer.join("\n");
}
console.log(solution(input));
