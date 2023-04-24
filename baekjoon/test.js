const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (j < i) str += " ";
      else str += "*";
    }
    answer.push(str);
  }
  return answer.join("\n");
}
console.log(solution(input[0]));
