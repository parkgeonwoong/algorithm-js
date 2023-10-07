const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));


function solution(input) {
  const [[n], ...paper] = input;
  let minusOne = 0,   // -1 색상 개수
    zero = 0,         // 0 색상 개수
    one = 0;          // 1 색상 개수

  function divide(x, y, length) {
    let minusOneCnt = 0,
      zeroCnt = 0,
      oneCnt = 0;

    // 주어진 범위 내의 색상 개수 세기
    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (paper[i][j] === -1) minusOneCnt++;
        else if (paper[i][j] === 0) zeroCnt++;
        else oneCnt++;
      }
    }

    const equal = length * length; // 한 작은 종이의 총 셀 개수

    if (minusOneCnt === equal) minusOne++;
    else if (zeroCnt === equal) zero++;
    else if (oneCnt === equal) one++;
    // 모두 같은 수가 아닌경우 9개로 자르기
    else {
      const nextLength = length / 3;
      for (let i = x; i < x + length; i += nextLength) {
        for (let j = y; j < y + length; j += nextLength) {
          divide(i, j, nextLength);
        }
      }
    }
  }

  divide(0, 0, n);
  return [minusOne, zero, one].join("\n");
}

console.log(solution(input));
