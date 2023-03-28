/**
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
 *
 * ❓sort의 시간 복잡도는? → nlogn
 * 다른 효율적인 방법이 없을까?
 *
 * @로직
 * - 투포인트 알고리즘 → for문 하나로 진행 n+n
 * - 두 배열을 비교해서 조건에 맞게(작은값) 새로운 배열에 넣어주고 다음값과 비교한다
 */

// 내가 푼 방법
function solution(a, b) {
  let answer = [...a, ...b];
  return answer.sort((a, b) => a - b);
}

// 투포인트 알고리즘
function solution(a, b) {
  let answer = [];
  const n = a.length;
  const m = b.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution(a, b));
