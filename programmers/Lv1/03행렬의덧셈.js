/**
 * 일단 for문 이중으로 브루트 포스로 풀었는데 다른 방식이나 메소드 없을까?
 */

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

// map으로 구현
function solution(arr1, arr2) {
  return arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]));
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
