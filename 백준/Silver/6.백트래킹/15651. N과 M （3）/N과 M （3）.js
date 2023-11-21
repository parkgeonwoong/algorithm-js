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

  function DFS(L) {
    if (L === M) {
      answer.push([...temp].join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      temp.push(i);
      DFS(L + 1);
      temp.pop();
    }
  }

  DFS(0);
  return answer.join("\n");
}

console.log(solution(input));
