const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

// console.log(input);

function solution(input) {
  const answer = [];
  const result = [];
  const n = +input[0];
  const values = input.slice(1);

  // 1. 분리하는 과정
  for (let i = 0; i < n; i++) {
    const cnt = +values.splice(0, 1);
    const rest = values.splice(0, cnt);
    result.push(rest);
  }

  console.log(result);

  // 2. 가장많이 술소비 선정
  for (let x of result) {
    const temp = x.map((v) => v.split(" ")).sort((a, b) => +b[1] - +a[1]);
    answer.push(temp[0][0]);
  }
  return answer.join("\n");
}

console.log(solution(input));
