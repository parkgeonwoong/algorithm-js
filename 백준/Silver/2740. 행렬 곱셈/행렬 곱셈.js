const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const A = input.slice(1, input[0][0] + 1); // 행렬 A
  const B = input.slice(input[0][0] + 2); // 행렬 B
  const [[N, M]] = input.slice(0, 1); // 행렬 크기
  const answer = [];

  // 3x2 * 2x3 -> 3x3
  for (let i = 0; i < N; i++) {
    const temp = [];

    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < B.length; k++) {
        sum += A[i][k] * B[k][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
