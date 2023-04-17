const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

let [[n, m], ...arr] = input;

console.log(n, m);
console.log(arr);

let array = Array.from(Array(n), () => Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    array[i][j] = arr[i][j] + arr[i + n][j];
  }
}

console.log("result: ", array);

console.log(array.map((v) => v.join(" ")).join("\n"));

// function solution(n) {
//   let answer = n.reduce((a, b) => a + Math.pow(b, 2), 0);
//   return answer % 10;
// }
// console.log(solution(input));
