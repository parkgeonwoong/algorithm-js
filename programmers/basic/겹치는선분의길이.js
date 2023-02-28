/**
 * @desc: 내가 푼 방법 (실패)
 * - 결론은 완전탐색 알고리즘
 * - start, end를 구별해서 start < 다른 end < end 조건을 만족하는 경우를 찾는다
 * - 구간에서 겹치는 조건 (여기에서 구현이 실패)
 * - |end - start| 길이 구함
 *
 * @실패원인
 * - 겹치는 조건을 어떻게 해야할지 모르겠음
 * - 값의 범위가 규칙이 없음
 *
 * @해결방법
 * - 선분의 길이 자체 배열을 만들어야겠다.
 */

/**
 * @desc : 다른 사람의 풀이
 * - 조건에 따라서 배열의 길이만큼 만든다. 0으로 채운다. (-100~100)
 * - 이렇게 되면 겹치는 부분만을 세면 된다.
 * - 겹치는 부분을 +1씩 증가시킨다
 * - 선분의 겹치는 부분이니까 1보다 크다면 answer++
 */

function solution(lines) {
  let answer = 0;
  let lineMap = new Array(200).fill(0); // -100 ~ 100

  // lines의 길이는 3
  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    // 왼쪽과 오른쪽의 선분을 표시한다
    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  // 겹치는 부분이니까 1보다 커야한다
  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer++;
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
