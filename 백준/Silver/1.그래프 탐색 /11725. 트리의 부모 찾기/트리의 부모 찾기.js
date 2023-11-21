const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], ...arr] = input;
  const visited = Array.from({ length: n + 1 }, () => false);
  const graph = Array.from({ length: n + 1 }, () => []);
  const answer = [];

  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  function DFS(v) {
    for (let i of graph[v]) {
      if (!visited[i]) {
        visited[i] = true;
        answer[i] = v;
        DFS(i);
      }
    }
  }

  visited[1] = true;
  DFS(1);

  return answer.slice(2).join("\n");
}

console.log(solution(input));

/**
 * BFS
 */

// function BFS() {
//   visited[1] = true;
//   const queue = [1];

//   while (queue.length) {
//     const cur = queue.shift();
//     for (let i of graph[cur]) {
//       if (!visited[i]) {
//         visited[i] = true;
//         answer[i] = cur;
//         queue.push(i);
//       }
//     }
//   }
// }

// BFS();
