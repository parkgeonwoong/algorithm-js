/**
*  그래프 탐색
* 1. 그래프 생성 (쌍방향)
* 2. DFS, BFS 구현방식
*/

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, M, V], ...arr] = input;
  const answer = [];

  // 1. 그래프 인접리스트 생성
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [from, to] = arr[i];
    graph[from].push(to);
    graph[to].push(from);
  }

  graph.forEach((v) => v.sort((a, b) => a - b));

  // 2. DFS
  function DFS(graph, start) {
    const visited = []; // 탐색 완료
    const willCheck = []; // 탐색 예정
    willCheck.push(start);

    while (willCheck.length !== 0) {
      const node = willCheck.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        willCheck.push(...graph[node].reverse());
      }
    }

    return visited.join(" ");
  }

  // 3. BFS
  function BFS(graph, start) {
    const visited = [];
    const willCheck = [];
    willCheck.push(start);

    while (willCheck.length !== 0) {
      const node = willCheck.shift();
      if (!visited.includes(node)) {
        visited.push(node);
        willCheck.push(...graph[node]);
      }
    }

    return visited.join(" ");
  }

  answer.push(DFS(graph, V));
  graph.forEach((v) => v.reverse()); // reverse()에 의해 값 바뀐것 복구
  answer.push(BFS(graph, V));

  return answer.join("\n");
}

console.log(solution(input));
