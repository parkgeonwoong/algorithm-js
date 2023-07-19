const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

// 유클리드 호제법
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(input) {
  const answer = [];

  input.forEach((v) => {
    v.shift();
    v.sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < v.length - 1; i++) {
      for (let j = i + 1; j < v.length; j++) {
        sum += gcd(v[i], v[j]);
      }
    }
    answer.push(sum);
  });
  return answer.join("\n");
}

console.log(solution(input));