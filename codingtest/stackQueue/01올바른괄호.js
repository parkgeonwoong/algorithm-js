/**
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
 *
 * @푼방법
 * 어떻게 접근을 해야할지 감이 안잡힘
 *
 * - 스택으로 구현
 * - (: push   ): pop
 * - 스택의 길이로 조건을 계속 줘야한다
 */

function solution(arr) {
  let answer = "YES";
  let stack = [];

  for (let x of arr) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));

let b = "))((";
console.log(solution(b));
