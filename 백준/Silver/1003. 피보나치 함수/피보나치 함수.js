const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

function solution(input) {
  const answer = [];

  for (let x of input) {
    // 0 1의 갯수를 메모이제이션
    const memo = [
      [1, 0],
      [0, 1],
    ];

    for (let i = 2; i <= x; i++) {
      memo[i] = [
        memo[i - 1][0] + memo[i - 2][0],
        memo[i - 1][1] + memo[i - 2][1],
      ];
    }
    answer.push(memo[x].join(" "));
  }
  return answer.join("\n");
}

console.log(solution(input));
