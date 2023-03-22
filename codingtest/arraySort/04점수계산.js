/**
 * 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
 * 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
 * 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다.
 * 틀린 문제는 0점으로 계산한다.
 *
 * @수정
 * - 순회를 돌다가 전것이 1이면 누적되게 했다. 왜냐하면 전의 문제가 맞아야 점수가 증가하니까
 * - 하지만 1,0 이니까 1을 만날때만 증가하는 방식으로 수정
 */

// 내가 푼 방식
function solution(arr) {
  let answer = 0,
    cnt = 0;

  if (arr[0] === 1) answer += 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) continue;

    if (arr[i - 1] === 1) {
      cnt += 1;
      answer += cnt + 1;
    } else {
      cnt = 0;
      answer += 1;
    }
  }
  return answer;
}

// 다른풀이
function solution(arr) {
  let answer = 0;
  let cnt = 0;

  for (let i of arr) {
    if (i === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
