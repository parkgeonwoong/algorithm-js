const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n, s], [...arr]] = input;
  let answer = 0;

  function DFS(L, sum) {
    if (L === n) return;

    sum += arr[L];

    if (sum === s) answer++; 

    DFS(L + 1, sum);
    DFS(L + 1, sum - arr[L]); // 현재 원소를 제외한 경우를 탐색
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(input));
