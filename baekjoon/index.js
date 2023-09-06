const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// console.log(input);

function solution(input) {
  const [T] = input.shift();
  const answer = [];

  // 테스트케이스 갯수만큼 진행
  for (let i = 0; i < T; i++) {
    const [M, N, K] = input.shift();
    const ground = Array.from({ length: M }, () => Array(N).fill(0));
    const visted = Array.from({ length: M }, () => Array(N).fill(0)); // 방문한것 -> 중복처리 안되게
    let cnt = 0;

    // 배추밭 표시
    for (let j = 0; j < K; j++) {
      const [x, y] = input.shift();
      ground[x][y] = 1;
    }

    // 상하좌우 네 방향
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for (let j = 0; j < M; j++) {
      for (let k = 0; k < N; k++) {
        if (ground[j][k] === 1 && visted[j][k] === 0) {
          dfs(j, k);
          cnt++;
        }
      }
    }

    function dfs(x, y) {
      visted[x][y] = 1;
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          nx < M &&
          ny >= 0 &&
          ny < N &&
          ground[nx][ny] === 1 &&
          visted[nx][ny] === 0
        ) {
          dfs(nx, ny);
        }
      }
    }
    answer.push(cnt);
  }

  return answer.join("\n");
}

console.log(solution(input));
