/**
 * 13458
 * 1. 각 방마다 총감독이 무조건 1명씩 맡는거였음. 글은 친절하지 않다는 점 기억.
 * 2. 각 방마다 총감독보다 작을 수 있는 예외처리 할 것 (음수가 나오면 곤란)
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  const [N, room, [B, C]] = n;
  let answer = 0;

  for (let i = 0; i < N; i++) {
    if (room[i] >= B) room[i] -= B;
    else room[i] = 0;
    answer++;
  }

  for (let x of room) {
    answer += Math.ceil(x / C);
  }

  return answer;
}
console.log(solution(input));
