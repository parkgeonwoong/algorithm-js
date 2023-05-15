const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  const N = arr.length;

  if (N === 1) return [arr, 0];
  else {
    const mid = Math.floor(N / 2);
    const [left, leftCount] = solution(arr.slice(0, mid));
    const [right, rightCount] = solution(arr.slice(mid));
    const [merged, mergeCount] = merge(left, right);
    return [merged, leftCount + rightCount + mergeCount];
  }
}

function merge(left, right) {
  let i = (j = 0);
  let result = [];
  let cnt = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
      cnt += left.length - i;
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.lenght) {
    result.push(right[j++]);
  }

  return [result, cnt];
}

console.log(solution(input[0])[1]);
