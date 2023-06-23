/**
 * 2846
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .flatMap((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  const arr = [];
  let temp = []; // 오르막 구간 배열

  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < n[i + 1]) {
      temp.push(n[i], n[i + 1]);
      // 오르막구간 마지막
      if (i === n.length - 2) {
        arr.push(temp);
      }
    } else {
      arr.push(temp);
      temp = [];
    }
  }

  const answer = arr.map((v) =>
    v.length > 0 ? Math.max(...v) - Math.min(...v) : 0
  );
  return Math.max(...answer);
}

console.log(solution(input));
