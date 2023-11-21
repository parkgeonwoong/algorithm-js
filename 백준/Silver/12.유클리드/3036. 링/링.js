const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// 유클리드 호제법
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(input) {
  const [[N], [...arr]] = input;
  const answer = [];
  const first = arr.shift(); // 첫번째 링

  for (const x of arr) {
    const div = gcd(first, x); // 최대공약수값
    answer.push(`${first / div}/${x / div}`);
  }
  return answer.join("\n");
}

console.log(solution(input));
