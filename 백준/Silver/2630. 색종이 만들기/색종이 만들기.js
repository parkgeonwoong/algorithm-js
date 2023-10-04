const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n], ...paper] = input;
  let white = 0,
    blue = 0;

  // 분할정복 = 재귀적으로 자신을 호출하면서 그 연산의 단위를 조금씩 줄어가는 방식
  function divide(x, y, length) {
    let colorCnt = 0; // 파란칸 갯수
    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (paper[i][j]) colorCnt++;
      }
    }

    if (!colorCnt) white++;
    else if (colorCnt === length * length) blue++;
    else {
      // 전체 흰,파랑이 아니라면 4개의 좌표로 분할
      divide(x, y, length / 2);
      divide(x, y + length / 2, length / 2);
      divide(x + length / 2, y, length / 2);
      divide(x + length / 2, y + length / 2, length / 2);
    }
  }

  divide(0, 0, n);
  return [white, blue].join("\n");
}

console.log(solution(input));
