const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  return input
    .map((sentence) => {
      const words = sentence.split(" ");
      const reverseWord = words.map((word) =>
        word.split("").reverse().join("")
      );
      return reverseWord.join(" ");
    })
    .join("\n");
}
console.log(solution(input));
