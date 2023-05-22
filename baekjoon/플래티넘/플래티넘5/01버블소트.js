/**
 * 1517
 *
 * 제목은 버블소트인데 버블정렬하면 시간 초과가 뜬다? n*2 말고 병합정렬 nlogn 써야하나?
 * 이럴거면 왜 제목이 버블정렬인가? 병합정렬이라고 하면 되는데
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  const [[N], M] = arr;
  let answer = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (M[j] > M[j + 1]) {
        [M[j], M[j + 1]] = [M[j + 1], M[j]];
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(input));

function solution(arr) {
  const [[N], M] = arr;

  if (N === 1) return M;
  else {
    const mid = Math.floor(N / 2);
    return merge(solution(M.slice(0, mid)), solution(M.slice(mid)));
  }
}

function merge(left, right) {
  let i = (j = 0);
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.lenght) {
    result.push(right[j++]);
  }

  return result;
}

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

console.log(solution(input));
