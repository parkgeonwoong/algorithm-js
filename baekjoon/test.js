const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(arr) {
  const [, N, , M] = arr;
  const nSet = new Set(N);
  const answer = [];

  for (let x of M) {
    answer.push(nSet.has(x) ? 1 : 0);
  }

  return answer.join("\n");
}

console.log(solution(input));
