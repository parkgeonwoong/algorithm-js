const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number))
  .flat();

/**
 * 홀수로 시작 -> 1,2경기
 * 각 팀 -> 묶음으로 표현
 * 1 2 3 4 5 6 7 8
 * 1 1 2 2 3 3 4 4 n=1
 * 1 1 1 1 2 2 2 2 n=2
 * 1 1 1 1 1 1 1 1 n=3
 */

function solution(input) {
  let [N, KIM, LIM] = input;
  let answer = 0;

  while (KIM !== LIM) {
    KIM = Math.ceil(KIM / 2);
    LIM = Math.ceil(LIM / 2);
    answer++;
  }
  return answer;
}

console.log(solution(input));