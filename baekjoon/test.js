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
