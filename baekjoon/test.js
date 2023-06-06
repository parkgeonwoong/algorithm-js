const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

const obj = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(input) {
  const [x, y] = input;
  let sum = y;
  for (let i = 1; i < x; i++) {
    sum += obj[i];
  }
  return day[sum % 7];
}

console.log(solution(input));
