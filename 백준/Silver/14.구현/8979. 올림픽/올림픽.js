const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function compare(a, b) {
   // 같으면 계속 비교
  for (let i = 1; i < a.length; i++) {
    if (a[i] < b[i]) return true;
    else if (a[i] > b[i]) return false;
  }
  return false;
}

function solution(input) {
  const [[n, k], ...arr] = input;
  const rank = Array.from({ length: n }, () => 1);

  // 국가간 비교 (브루트포스)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (compare(arr[i], arr[j])) {
        rank[i] += 1;
      }
    }
  }

  // 국가를 나타내는 정수와 k찾고, rank배열에서 등수찾기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      return rank[i];
    }
  }
}

console.log(solution(input));