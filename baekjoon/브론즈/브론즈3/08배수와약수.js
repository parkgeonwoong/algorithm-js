/**
 * 5086
 */

// 내가 푼 방법
const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  let answer = [];
  n.forEach((v) => {
    if (v[0] < v[1]) {
      if (v[1] % v[0] === 0) answer.push("factor");
      else answer.push("neither");
    } else {
      if (v[0] % v[1] === 0) answer.push("multiple");
      else answer.push("neither");
    }
  });
  return answer.join("\n");
}

// 리팩토링이 가능할 것 같애서 진행
function solution(n) {
  let answer = n.map(([a, b]) => {
    if (b % a === 0) return "factor";
    if (a % b === 0) return "multiple";
    return "neither";
  });
  return answer.join("\n");
}

console.log(solution(input));
