const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [N, M] = input;
  const answer = [];
  const temp = [];

  function DFS(L, start) {
    if (L === M) {
      answer.push([...temp].join(" "));
      return;
    }

    for (let i = start; i <= N; i++) {
      temp.push(i);
      DFS(L + 1, i);
      temp.pop();
    }
  }

  DFS(0, 1);
  return answer.join("\n");
}

console.log(solution(input));
