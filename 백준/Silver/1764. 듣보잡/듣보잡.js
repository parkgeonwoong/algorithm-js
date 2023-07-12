const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ");
  const setN = new Set(input.slice(0, N));
  const setM = new Set(input.slice(N));
  const answer = [];

  for (let n of setN) {
    if (setM.has(n)) answer.push(n);
  }

  answer.sort();

  return [[answer.length], answer].flat().join("\n");
}

console.log(solution(input));
