const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

console.log(input);

function solution(input) {
  const [k, n] = input[0].split(" ").map((v) => +v);
  const arr = input.slice(1).map((v) => +v);
  const avg = Math.floor(arr.reduce((a, b) => a + b, 0) / n);

  let left = 1;
  let right = avg;
  let max = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;

    for (let x of arr) {
      cnt += Math.floor(x / mid);
    }
    console.log("mid: ", mid);
    if (cnt >= n) {
      max = Math.max(max, mid);
      left = mid + 1;
      console.log("max: ", max);
      console.log("----");
    } else {
      right = mid - 1;
    }
  }

  return max;
}

console.log(solution(input));
