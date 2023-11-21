const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const arr = Array.from({ length: 100 }, () => Array(100).fill(0)); // x,y <= 100

  for (let x of input) {
    const [x1, y1, x2, y2] = x;

    // 포함되는 좌표 = 1로 표시
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        arr[i][j] = 1;
      }
    }
  }

  const answer = arr.reduce(
    (acc, row) => acc + row.reduce((rowSum, v) => rowSum + v, 0),
    0
  );

  return answer;
}

console.log(solution(input));
