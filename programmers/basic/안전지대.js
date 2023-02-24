/**
 * @desc : 내가 풀이한 방법
 * - 차근차근 계획을 세워서 풀이
 * 1. 매개변수의 2차원 배열 똑같이 만듬
 * 2. 순회하면서 1을 찾는다
 * 3. x, y 좌표를 미리 만들어서 8개 방향을 순회한다
 * 4. 조건 맵을 벗어나는 경우 처리한다
 * 5. 0을 찾으면 safeBoard에 1을 기록한다
 * 6. 2차원 배열을 순회하면서 0의 갯수를 센다
 */

function solution(board) {
  const n = board.length;
  // 1. board와 같은 크기의 2차원 배열을 만든다
  const safeBoard = Array.from(Array(n), () => Array(n).fill(0));
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 2. 순회하면서 1을 찾는다
      if (board[i][j] === 1) {
        // 3. 1을 포함한 8개 방향을 순회한다
        for (let k = 0; k < 8; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          // 3-1. 8개 방향 중 범위를 벗어나는 경우는 제외한다
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

          // 3-2. 8개 방향 중 0을 찾는다
          if (board[nx][ny] === 0) {
            // 3-3. 0을 찾으면 safeBoard에 1을 기록한다
            safeBoard[nx][ny] = 1;
          }
        }
      }
    }
  }

  console.log(safeBoard);

  // 4. 2차원 배열을 순회하면서 0의 갯수를 센다
  for (let i = 0; i < safeBoard.length; i++) {
    for (let j = 0; j < safeBoard.length; j++) {
      if (safeBoard[i][j] === 0) answer++;
    }
  }

  return answer;
}

/**
 * @desc : 지저분하여 다시 풀어본 방법
 * - 위의 방식을 진행하되, 좌표를 함수로 만들어서 사용
 */

function solution(board) {
  const n = board.length;
  // 1. board와 같은 크기의 2차원 배열을 만든다
  const safeBoard = Array.from(Array(n), () => Array(n).fill(0));
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  let answer = 0;

  function dfs(x, y) {
    // 3. 1을 포함한 8개 방향을 순회한다
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      // 3-1. 8개 방향 중 범위를 벗어나는 경우는 제외한다
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      // 3-2. 8개 방향 중 0을 찾는다
      if (board[nx][ny] === 0) {
        // 3-3. 0을 찾으면 safeBoard에 1을 기록한다
        safeBoard[nx][ny] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 2. 순회하면서 1을 찾는다
      if (board[i][j] === 1) {
        safeBoard[i][j] = 1;
        dfs(i, j);
      }
    }
  }

  console.log(safeBoard);

  // 4. 2차원 배열을 순회하면서 0의 갯수를 센다
  answer = [...safeBoard.join()].filter((i) => i === "0").length;

  return answer;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);
