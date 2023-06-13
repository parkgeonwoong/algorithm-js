/**
 * 9093
 *
 * 처음에 푼 방법이 뭔가 메소드를 많이 쓰고 가독성이 불편해서 map 방법으로 생각
 *
 * 그대로 배열을 유지하면서 for문 마다 대체하는 map이다.
 */

// 처음 푼방법

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  const answer = [];

  for (let x of input) {
    let a = x.split(" ");
    let temp = "";
    for (let i of a) {
      temp += i.split("").reverse().join("") + " ";
    }
    answer.push(temp);
  }
  return answer.join("\n");
}

// map 방식
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
