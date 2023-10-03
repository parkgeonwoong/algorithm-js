const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

function solution(input) {
  const stack = [];
  input.unshift(" "); // i와 i-1 비교하기위함 (레이저)
  let cnt = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === "(") stack.push(input[i]);
    else {
      stack.pop();
      // 레이저 절단후 갯수
      if (input[i - 1] === "(") {
        cnt += stack.length;
      } else cnt++; // 막대기 끝 ))
    }
  }
  return cnt;
}

console.log(solution(input));
