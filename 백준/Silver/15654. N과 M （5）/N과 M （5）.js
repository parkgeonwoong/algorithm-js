const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, M], [...arr]] = input;
  const visited = Array.from({ length: N }, () => false);
  const answer = [];
  const temp = [];

  arr.sort((a, b) => a - b);

  function DFS(L) {
    if (L === M) {
      answer.push([...temp].join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(arr[i]);
        DFS(L + 1);
        visited[i] = false;
        temp.pop();
      }
    }
  }

  DFS(0);
  return answer.join("\n");
}

console.log(solution(input));
