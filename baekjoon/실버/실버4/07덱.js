/**
 * 10866
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
  const dequeue = [];
  const answer = [];

  const obj = {
    pop_front: () => dequeue.shift() || -1,
    pop_back: () => dequeue.pop() || -1,
    size: () => dequeue.length,
    empty: () => (dequeue.length === 0 ? 1 : 0),
    front: () => dequeue[0] || -1,
    back: () => dequeue[dequeue.length - 1] || -1,
    push_front: (item) => {
      dequeue.unshift(item.split(" ")[1]);
      return;
    },
    push_back: (item) => {
      dequeue.push(item.split(" ")[1]);
      return;
    },
  };

  for (let x of input) {
    if (obj[x]) {
      answer.push(obj[x]());
    } else {
      x.includes("push_front") ? obj.push_front(x) : obj.push_back(x);
    }
  }
  return answer.join("\n");
}
console.log(solution(input));
