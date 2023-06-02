/**
 * 10828
 * ✅ 굉장히 괜찮은 문제!
 * [첫번째 생각]
 * 1. 순수 if, else if, else로 구현할지 생각
 *
 * [두번째 생각]
 * 1. Object 함수로 적용해보자 (새로운 방법으로 풀고싶음)
 *
 * NOTE:
 * 1. stack에다가 값을 담지만 return하는것이 아닌데 실수. -> answer 배열 새로 만듬
 *  ∴ push 빼고 호출이라서 값을 담아줬다.
 * 2. obj 말고 input의 for문이 오히려 핵심이다.
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
