const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" "));

function solution(input) {
  const arr = [];

  // 배열 다시 만들기
  for (let x of input) {
    const temp = [];
    x.reverse().forEach((v) => temp.push(!isNaN(v) ? +v : v));
    arr.push(temp);
  }

  arr.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]) : a[0] - b[0]
  );

  return arr[arr.length - 1][3] + "\n" + arr[0][3];
}

console.log(solution(input));
