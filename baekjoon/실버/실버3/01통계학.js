/**
 * 2108
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.log(input);

// 1. 산술평균
function calculateAverage(input) {
  const n = input.length;
  const sum = input.reduce((a, b) => a + b, 0);
  const avg = Math.round(sum / n);
  return avg === -0 ? 0 : avg;
}

// 2. 중앙값
function calculateMedian(input) {
  const sortedInput = [...input].sort((a, b) => a - b);
  const middleIndex = Math.floor(input.length / 2);
  return sortedInput[middleIndex];
}

// 3. 최빈값
function calculateMode(input) {
  const dic = new Map();
  for (let x of input) {
    dic.set(x, (dic.get(x) || 0) + 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  const mode = [];

  for (let value of dic.values()) {
    if (max < value) max = value;
  }
  for (let [key, value] of dic) {
    if (max === value) mode.push(key);
  }
  mode.sort((a, b) => a - b);
  return mode.length > 1 ? mode[1] : mode[0];
}

// 4. 범위
function calculateRange(input) {
  return Math.max(...input) - Math.min(...input);
}

function solution(input) {
  const answer = [];

  answer.push(
    calculateAverage(input),
    calculateMedian(input),
    calculateMode(input),
    calculateRange(input)
  );

  return answer.join("\n");
}
console.log(solution(input));
