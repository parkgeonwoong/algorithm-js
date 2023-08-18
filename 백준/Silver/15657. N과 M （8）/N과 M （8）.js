const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, M], [...arr]] = input;
  const answer = [];
  const temp = [];

  arr.sort((a, b) => a - b);

  function DFS(L, start) {
    if (L === M) {
      answer.push([...temp].join(" "));
      return;
    }

    for (let i = start; i < N; i++) {
      temp.push(arr[i]);
      DFS(L + 1, i);
      temp.pop();
    }
  }

  DFS(0, 0);
  return answer.join("\n");
}

console.log(solution(input));
