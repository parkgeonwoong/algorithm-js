/**
 * 10448
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.log(input);

// 2. Tn 배열을 구하기
function findTn(n) {
  let arrTn = [];
  for (let i = 1; i <= n; i++) {
    arrTn.push((i * (i + 1)) / 2);
  }
  return arrTn;
}

// 1. n을 먼저 구하기
function findN(x) {
  let n = 1;

  while (true) {
    if (n ** 2 + n > x * 2) {
      n--;
      break;
    } else n++;
  }
  return n;
}

function solution(input) {
  const answer = [];

  for (let x of input) {
    const n = findN(x);
    const arrTn = findTn(n);

    // 3. 값이 Tn의 구성중 3개로 이루어지는지 확인  -> 1, 0
    function DFS(L, sum) {
      if (L > 3) return;
      else if (L === 3) {
        if (sum === x) {
          return true;
        } else {
          return false;
        }
      } else {
        for (let i of arrTn) {
          if (DFS(L + 1, sum + i)) {
            return true;
          }
        }
      }
    }

    answer.push(DFS(0, 0) ? 1 : 0);
  }
  return answer.join("\n");
}

console.log(solution(input));
