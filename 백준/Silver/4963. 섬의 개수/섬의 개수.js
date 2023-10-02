const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

input.pop();

function solution(input) {
  const answer = [];

  // 1. 테스트케이스 분리
  for (let i = 0; i < input.length; i++) {
    const [w, h] = input[i];
    const visited = Array.from(Array(h), () => Array(w).fill(false));
    const map = input.slice(i + 1, i + h + 1);
    i += h;

    // 8가지 방향좌표
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let cnt = 0; // 섬의 갯수

    // // 2. 지도 순회
    for (let x = 0; x < h; x++) {
      for (let y = 0; y < w; y++) {
        if (map[x][y] === 1 && !visited[x][y]) {
          cnt++;
          DFS(x, y);
        }
      }
    }

    // 3. 지도탐색
    function DFS(x, y) {
      visited[x][y] = true;
      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < h && ny >= 0 && ny < w && map[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          DFS(nx, ny);
        }
      }
    }

    answer.push(cnt);
  }
  return answer.join("\n");
}

console.log(solution(input));
