const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const S = new Set(input.slice(0, N));
  const arrM = input.slice(N);
  let answer = 0;

  for (let str of arrM) {
    if (S.has(str)) answer++;
  }

  return answer;
}

console.log(solution(input));
