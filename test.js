// 겹치는 선분의 길이
function solution(lines) {
  let answer = 0;
  let lineMap = new Array(200).fill(0); // -100 ~ 100

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);

solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
