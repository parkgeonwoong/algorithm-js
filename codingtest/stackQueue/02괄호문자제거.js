/**
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
 */

// 내가 푼 것
function solution(arr) {
  let stack = [];

  for (let x of arr) {
    if (x !== ")") stack.push(x);
    else {
      while (stack.pop() !== "(");
    }
  }

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
