/**
* 문제: 미로 탐색 (2178)
 BFS로 접근 = 가장 최단거리
**/

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

function solution(input) {
  const [stringNM, ...arr] = input;
  const [N, M] = stringNM.map((v) => Number(v));
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const miro = arr.map((v) => String(v).split(""));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function BFS(x, y) {
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
          if (miro[nx][ny] === "1" && !visited[nx][ny]) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
            miro[nx][ny] = Number(miro[x][y]) + 1;
          }
        }
      }
    }
  }

  BFS(0, 0);
  return miro[N - 1][M - 1];
}

console.log(solution(input));
