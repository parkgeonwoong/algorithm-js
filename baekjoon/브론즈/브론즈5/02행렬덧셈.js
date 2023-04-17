/**
 * 2738번
 *
 * @생각
 * 2차원 입출력 배열을 n,m을 받아서 이어서 나오는것이 어려웠다.
 * 
 * @입력
3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100
 */

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
