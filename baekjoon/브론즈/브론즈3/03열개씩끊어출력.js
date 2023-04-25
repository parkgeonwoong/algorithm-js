/**
 * 11721
 */
// 내가 푼 방법
const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

console.log(input);

function solution(n) {
  let answer = [];
  let str = "";

  while (n.length) {
    if (str.length === 10) {
      answer.push(str);
      str = "";
    } else {
      str += n[0];
      n.shift();

      if (n.length === 0) {
        answer.push(str);
      }
    }
    console.log(n, str);
  }
  return answer.join("\n");
}
console.log(solution(input));

// 다른사람풀이
const fileName2 = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input2 = require("fs").readFileSync(fileName2).toString().trim();

console.log(input);

function solution(n) {
  let answer = [];
  for (let i = 0; i < n.length; i += 10) {
    answer.push(n.slice(i, i + 10));
  }
  return answer.join("\n");
}
console.log(solution(input2));
