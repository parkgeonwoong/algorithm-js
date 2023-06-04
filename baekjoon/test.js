const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(input) {
  const [n, k] = input;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let answer = [];

  while (arr.length > 0) {
    for (let i = 1; i <= k; i++) {
      if (i === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }

  return `<${answer.join(", ")}>`;
}

console.log(solution(input));
