const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(""));

function solution(input) {
  const n = input.length;
  let width = 0;
  let height = 0;

  for (let i = 0; i < n; i++) {
    let cntWidth = 1;
    let cntHeight = 1;

    for (let j = 0; j < n - 1; j++) {
      if (input[i][j] === "." && input[i][j + 1] === ".") cntWidth++;
      else {
        if (cntWidth >= 2) {
          width++;
          cntWidth = 1;
        }
      }
      if (input[j][i] === "." && input[j + 1][i] === ".") cntHeight++;
      else {
        if (cntHeight >= 2) {
          height++;
          cntHeight = 1;
        }
      }
    }
    if (cntWidth >= 2) width++;
    if (cntHeight >= 2) height++;
  }

  return [width, height].join(" ");
}

console.log(solution(input));