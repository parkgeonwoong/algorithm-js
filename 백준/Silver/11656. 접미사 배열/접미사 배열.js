const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

function solution(s) {
  const answer = [];

  while (s.length > 0) {
    answer.push(s.join(""));
    s.shift();
  }
  return answer.sort((a, b) => (a > b ? 1 : -1)).join("\n");
}

console.log(solution(input));
