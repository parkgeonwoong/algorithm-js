/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 *
 * 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데
 * 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
 *
 * @내가푼방식
 * - 정렬된 상태에서 인덱스로 순서 구하는 방식
 * - 예외처리 조건이 성립하지 않는다. ❌
 *
 * @로직
 * - answer에 배열을 1로 채운다
 * - 이중 for문을 돌면서 기준하나와 나머지를 비교하면서 기준 < 비교 이면 answer 배열에 +1씩 추가해준다.
 * 이렇게 되면 예외조건도 성립하게된다. 같은 등수를 독립적으로 줄수 있으니까
 */

function solution(arr) {
  let answer = [];
  const arrCopy = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer.push(arrCopy.indexOf(arr[i]) + 1);
  }

  return answer;
}

// 정답
function solution(arr) {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  // 기준 for문
  for (let i = 0; i < n; i++) {
    // 비교 for문
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i] += 1;
    }
  }

  return answer;
}

let arr = [92, 92, 92, 100, 76];
console.log(solution(arr));
