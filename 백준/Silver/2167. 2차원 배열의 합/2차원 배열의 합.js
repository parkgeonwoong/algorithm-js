const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const arr = input.slice(1, input[0][0] + 1);
const k = input.slice(input[0][0] + 2);

function solution(arr, k) {
  const answer = k.map(([i, j, x, y]) => {
    let sum = 0;
    for (let a = i - 1; a < x; a++) {
      for (let b = j - 1; b < y; b++) {
        sum += arr[a][b];
      }
    }
    return sum;
  });

  return answer.join("\n");
}

console.log(solution(arr, k));
