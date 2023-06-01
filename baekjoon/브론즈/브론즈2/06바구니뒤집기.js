/**
 * 10811
 * 배열을 뒤집은 상태에서 교체하는 방법은 splice로 인덱스부터 몇개만큼 지우고 나서 거기다가 넣는방법이다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(input) {
  const [[N, M], ...arr] = input;
  const answer = Array.from({ length: N }, (v, i) => i + 1);

  for (let x of arr) {
    const [a, b] = x;
    const ary = [];
    for (let i = a - 1; i < b; i++) {
      ary.push(answer[i]);
    }
    ary.reverse();
    answer.splice(a - 1, b - a + 1, ...ary);
  }
  return answer.join(" ");
}
console.log(solution(input));
