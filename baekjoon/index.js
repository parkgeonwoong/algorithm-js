const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(input) {
  const [[n], [...arr], [x]] = input;
  let left = 0;
  let right = n - 1;
  let answer = 0;

  arr.sort((a, b) => a - b);

  while (left !== right) {
    if (arr[left] + arr[right] === x) {
      answer++;
      left++;
      right--;
    } //
    else if (arr[left] + arr[right] < x) left++;
    else right--;
  }

  return answer;
}

console.log(solution(input));

module.exports = solution;
