function solution(str) {
  let answer = 0;
  let stack = [];

  for (let x of str) {
    if (!isNaN(x)) stack.push(x);
    else {
      let b = Number(stack.pop());
      let a = Number(stack.pop());

      if (x === "+") stack.push(a + b);
      else if (x === "-") stack.push(a - b);
      else if (x === "*") stack.push(a * b);
      else stack.push(a / b);
    }
  }

  answer = stack.join("");
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
