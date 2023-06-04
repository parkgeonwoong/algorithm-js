/**
 * 1075
 *
 * 내가 짠 코드가 너무나도 더럽고 이해하기 어렵다고 생각함 -> 다른방법이 필요해보임
 *
 * 1. `padStart()` : 문자열 시작을 다른 문자열로 채워 길이를 만족함. 채워넣기로 좌측부터 시작
 * str = '5' str.padStart(2, '0') -> '05'
 * 2. 수학적으로 풀어보기
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .split("\n")
  .map(Number);

console.log(input);

function solution(input) {
  let answer = 0;
  let n = (input[0] + "").split("");
  let f = input[1];

  n.splice(-2, 2, 0, 0);
  n = parseInt(n.join(""));

  for (let i = 0; i < 100; i++) {
    if (n % f === 0) {
      answer = i;
      break;
    }
    n++;
  }

  return answer.toString().padStart(2, "0");
}

console.log(solution(input));

// 수학적
function solution(input) {
  const [n, f] = input;
  const tempN = Math.floor(n / 100) * 100;

  for (let i = 0; i < 100; i++) {
    if ((tempN + i) % f === 0) {
      if (i < 10) return "0" + i;
      return i;
    }
  }
}
