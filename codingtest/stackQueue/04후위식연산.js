/**
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
 * 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다
 */

function solution(str) {
  let answer = 0;
  let stack = [];

  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let right = stack.pop();
      let left = stack.pop();

      if (x === "+") stack.push(left + right);
      else if (x === "-") stack.push(left - right);
      else if (x === "*") stack.push(left * right);
      else stack.push(left / right);
    }
  }

  answer = stack.join("");
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
