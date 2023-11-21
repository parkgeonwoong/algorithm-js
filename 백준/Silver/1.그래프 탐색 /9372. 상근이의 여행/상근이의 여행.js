const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[T], ...arr] = input;
  const answer = [];

  for (let i = 0; i < T; i++) {
    const [N, M] = arr.shift();

    for (let j = 0; j < M; j++) {
      arr.shift();
    }
    answer.push(N - 1);
  }
  return answer.join("\n");
}

console.log(solution(input));
