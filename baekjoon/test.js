const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(input) {
  let arr = Array.from({ length: 100 }, () => Array(100).fill(false));

  for (let i of input) {
    const [x, y] = i;

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        arr[x + j][y + k] = true;
      }
    }
  }
  return arr.reduce((acc, cur) => {
    for (let x of cur) {
      if (x) acc++;
    }
    return acc;
  }, 0);
}
console.log(solution(input));
