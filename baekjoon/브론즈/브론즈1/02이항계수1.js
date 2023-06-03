/**
 * 11050
 * 이항계수는 조합식을 나타낸다. 밑의 2조건을 만족한다.
 * nCk = n-1Ck + n-1Ck-1
 * n==k, k==0 -> 1
 *
 * DP를 통해서 빠르게 풀고싶었다.
 * 1. 미리 이차원배열을 만든다. 0부터 시작이라서 갯수+1 해야함
 * 2. Math.min을 한 이유는 조합의 5C2 == 5C3 같아서 더 작은것으로 한것이다. -> Math.min을 안할거면 i로 해야함
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(input) {
  const [n, k] = input;
  let arr = Array.from({ length: n + 1 }, () => Array(k + 1));

  function bin(n, k) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= Math.min(k, i); j++) {
        if (j === 0 || j === i) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
      }
    }
    return arr[n][k];
  }

  return bin(n, k);
}
console.log(solution(input));
