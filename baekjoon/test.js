const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

input.forEach((item) => {
  if (!answer.includes(item)) {
    answer.push(item);
  }
});

console.log(answer.sort((a, b) => a - b).join("\n"));
