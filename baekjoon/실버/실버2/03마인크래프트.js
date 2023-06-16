/**
 * 18111
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function countTimeHeight(height, input) {
  const [[n, m, b], ...arr] = input;
  let block = b;
  let time = 0;
  let remove = 0;
  let add = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const item = arr[i][j];

      if (height < item) {
        remove += item - height;
        block += item - height;
      } else if (height > item) {
        add += height - item;
        block -= height - item;
      }
      time = remove * 2 + add;
    }
  }

  if (block < 0) return [Number.MAX_SAFE_INTEGER, height];
  return [time, height];
}

function solution(input) {
  const answer = [];

  for (let i = 256; i >= 0; i--) {
    answer.push(countTimeHeight(i, input));
  }

  answer.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });
  return answer[0].join(" ");
}
console.log(solution(input));
