const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

console.log(input);

function solution(input) {
  const [, str] = input;
  const M = 1234567891;
  let hash = 0;
  let r = 1;

  for (let i = 0; i < str.length; i++) {
    hash += (str[i].charCodeAt() - 96) * r;
    r *= 31;
    r %= M;
    hash %= M;
  }
  return hash;
}
console.log(solution(input));
