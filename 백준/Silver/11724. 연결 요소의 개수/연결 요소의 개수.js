const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, M], ...arr] = input;
  const visited = Array.from({ length: N + 1 }, () => false);
  const graph = Array.from({ length: N + 1 }, () => []);

  // 1. 그래프 만들기
  for (let i = 0; i < M; i++) {
    const [from, to] = arr[i];
    graph[from].push(to);
    graph[to].push(from);
  }

  let answer = 0;
  // 2. 그래프 순회
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  // 3. 그래프 탐색
  function dfs(start) {
    visited[start] = true;
    for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i];
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  return answer;
}

console.log(solution(input));
