const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("\n");

/**
 * 1. 커서를 인덱스로 생각해서 풀음 -> 시간초과
 * 2. 스택이용 -> (좌) (커서) (우) 가정
 * 속도 때문에 스택을 사용
 */
function solution(input) {
  const [[...lStack], len, ...arr] = input;
  const rStack = [];

  for (let i = 0; i < +len; i++) {
    const [cmd, value] = arr[i].split(" ");

    if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
    else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
    else if (cmd === "B") lStack.pop();
    else if (cmd === "P") lStack.push(value);
  }

  let answer = lStack.join("");
  answer += rStack.reverse().join("");

  return answer;
}

console.log(solution(input));
