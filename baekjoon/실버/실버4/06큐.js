/**
 * 10845
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  const queue = [];
  const answer = [];

  const obj = {
    pop: () => queue.shift() || -1,
    size: () => queue.length,
    empty: () => (queue.length === 0 ? 1 : 0),
    front: () => queue[0] || -1,
    back: () => queue[queue.length - 1] || -1,
    push: (item) => {
      queue.push(item.split(" ")[1]);
      return;
    },
  };

  for (let x of input) {
    obj[x] ? answer.push(obj[x]()) : obj.push(x);
  }
  return answer.join("\n");
}
console.log(solution(input));
