const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" "));

function solution(n) {
  const set = new Set();

  for (let x of n) {
    const [name, isWork] = x;
    if (isWork === "enter") set.add(name);
    else set.delete(name);
  }

  return [...set].sort((a, b) => (a > b ? -1 : 1)).join("\n");
}

console.log(solution(input));