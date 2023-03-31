/**
 * 한국정보올림피아드 - 쇠막대기 문제
 */

function solution(str) {
  let answer = 0;
  str = " " + str;
  let stack = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") {
        answer += stack.length;
      } else answer++;
    }
  }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

let b = "(((()(()()))(())()))(()())";
console.log(solution(b));
