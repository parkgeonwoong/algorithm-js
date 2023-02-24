function solution(board) {
  const n = board.length;
  const safeBoard = Array.from(Array(n), () => Array(n).fill(0));
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let answer = 0;

  function dfs(x, y) {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 3. 맵을 벗어나면 안됨
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      // 4. 1과 주변 위험지역을 세이프에 넣어준다
      if (board[nx][ny] === 0) {
        safeBoard[nx][ny] = 1;
      }
    }
  }

  // 1. 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 2. 1을 찾자
      if (board[i][j] === 1) {
        safeBoard[i][j] = 1;
        dfs(i, j);
      }
    }
  }

  console.log(safeBoard);

  // 5. 세이프의 0의 갯수를 센다
  answer = [...safeBoard.join()].filter((i) => i === "0").length;
  console.log(answer);
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);

// solution([
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0],
//   [0, 0, 0, 0, 0],
// ]);
