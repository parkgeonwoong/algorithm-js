/**
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선 중 가장 큰 합을 출력합니다.
 */

function solution(arr) {
  const n = arr.length;
  let vertical = 0;
  let horizontal = 0;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j]; // 행의 합
      colSum += arr[j][i]; // 열의 합
    }

    vertical = Math.max(vertical, rowSum);
    horizontal = Math.max(horizontal, colSum);
    diagonal1 += arr[i][i]; // 대각선 좌 -> 우
    diagonal2 += arr[i][n - i - 1]; // 대각선 우 -> 좌
  }

  return Math.max(vertical, horizontal, diagonal1, diagonal2);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
