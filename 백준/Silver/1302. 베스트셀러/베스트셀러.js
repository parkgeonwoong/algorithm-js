const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

function solution(input) {
  const book = new Map();

  for (const x of input) {
    if (book.has(x)) book.set(x, book.get(x) + 1);
    else book.set(x, 1);
  }

  // 정렬 많이 팔린 순
  const sortArr = [...book].sort((a, b) => b[1] - a[1]);
  const maxArr = sortArr.filter((v) => v[1] === sortArr[0][1]);
  return maxArr.sort((a, b) => (a[0] > b[0] ? 1 : -1))[0][0];
}

console.log(solution(input));
