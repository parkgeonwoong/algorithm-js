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
        if (j === 0 || i === j) {
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
