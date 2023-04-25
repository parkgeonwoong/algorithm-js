const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(n) {
  let answer = [];
  for (let i = 0; i < n.length; i += 10) {
    answer.push(n.slice(i, i + 10));
  }
  return answer.join("\n");
}
console.log(solution(input));
