const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input);

function solution(input) {
  const stack = [];
  const answer = [];

  const obj = {
    pop: () => stack.pop() || -1,
    size: () => stack.length,
    empty: () => (stack.length === 0 ? 1 : 0),
    top: () => stack[stack.length - 1] || -1,
    push: (item) => {
      stack.push(item.split(" ")[1]);
      return;
    },
  };

  for (let x of input) {
    obj[x] ? answer.push(obj[x]()) : obj.push(x);
  }

  return answer.join("\n");
}
console.log(solution(input));
