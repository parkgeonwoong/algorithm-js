const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const n = input.shift()[0]; // 컴퓨터 갯수
  const graph = Array.from({ length: n + 1 }, () => []); // 인접 리스트
  const visited = Array.from({ length: n + 1 }, () => 0); // 감염 여부
  input.shift();
  let answer = 0;

  for (const [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(start) {
    for (let x of graph[start]) {
      if (!visited[x]) {
        visited[x] = 1;
        answer++;
        DFS(x);
      }
    }
  }

  visited[1] = 1;
  DFS(1);

  return answer;
}

console.log(solution(input));
