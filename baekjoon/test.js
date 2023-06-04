const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

console.log(input);

function solution(input) {
  let answer = 10;

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) answer += 5;
    else answer += 10;
  }
  return answer;
}

console.log(solution(input));
