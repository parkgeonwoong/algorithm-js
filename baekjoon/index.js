/**
 * 문제: 단지번호붙이기 (2667)
 * 연결된 집합들의 갯수만 구하는 문제
 * 전역변수로 갯수를 세고, 조건에 맞았을 경우 +1, 다시 순회가 될때 초기화
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

console.log(input);

function solution(input) {
  const [stringN, ...arr] = input;
  const N = Number(stringN);
  const map = arr.map((v) => String(v).split(""));
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  const answer = [];
  let count = 0;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function DFS(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny] && map[nx][ny] === "1") {
        visited[nx][ny] = true;
        count++;
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && map[i][j] === "1") {
        visited[i][j] = true;
        count++;
        DFS(i, j);
        answer.push(count);
        count = 0;
      }
    }
  }

  return [answer.length, ...answer.sort((a, b) => a - b)].join("\n");
}

console.log(solution(input));
