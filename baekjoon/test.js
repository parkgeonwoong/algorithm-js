const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

function solution(s) {
  let maxIndex = 0;
  for (let i = 0; i < s.length - 1; i++) {
    maxIndex = i;
    for (let j = i + 1; j < s.length; j++) {
      if (s[maxIndex] < s[j]) maxIndex = j;
    }
    if (maxIndex !== i) [s[i], s[maxIndex]] = [s[maxIndex], s[i]];
  }
  return s[1];
}
console.log(solution(input));
