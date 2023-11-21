const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const answer = [];
  const [n, k] = input;
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  while (arr.length > 0) {
    for (let i = 0; i < k - 1; i++) {
      arr.push(arr.shift());
    }
    answer.push(arr.shift());
  }
  return "<" + answer.join(", ") + ">";
}

console.log(solution(input));