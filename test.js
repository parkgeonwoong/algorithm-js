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
