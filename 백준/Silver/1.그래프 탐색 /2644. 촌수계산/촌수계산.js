const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));


function solution(input) {
  const [[n], [x, y], [m], ...arr] = input;
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  let answer = 0;

  // 1. 그래프 생성
  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  function DFS(start, depth) {
    // 두 사람 촌수 도달
    if (start === y) {
      answer = depth;
      return;
    }

    for (let i of graph[start]) {
      if (!visited[i]) {
        visited[i] = true;
        DFS(i, depth + 1);
      }
    }
  }

  DFS(x, 0);
  return answer ? answer : -1;
}

console.log(solution(input));
