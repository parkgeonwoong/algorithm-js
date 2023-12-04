/**
 * 문제: 숨바꼭질 (1697)
 * 너비탐색인줄 생각치도 못한 문제
 * 주어진 조건에 따라서 BFS가 깊어진다는 것이 핵심 -> 시간초과를 방지하기 위해 방문여부를 확인
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

function solution(input) {
  const [N, K] = input;
  const visited = Array.from({ length: 100001 }, () => false);

  function BFS(start) {
    const queue = [[start, 0]];

    while (queue.length) {
      const [cur, time] = queue.shift();

      if (visited[cur]) continue;
      visited[cur] = true;

      if (cur === K) return time;

      for (let next of [cur - 1, cur + 1, cur * 2]) {
        if (!visited[next] && next >= 0 && next <= 100000) {
          queue.push([next, time + 1]);
        }
      }
    }
  }

  return BFS(N);
}

console.log(solution(input))