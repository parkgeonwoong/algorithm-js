const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(n) {
  // 1. 중복제거
  let answer = n.filter((v, i) => n.indexOf(v) === i);

  // 2. 길이 짧은순
  // 3. 길이 겹치면 사전순
  answer.sort((a, b) =>
    a.length - b.length === 0 ? (a > b ? 1 : -1) : a.length - b.length
  );
  return answer.join("\n");
}
console.log(solution(input));
