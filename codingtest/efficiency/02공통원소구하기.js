/**
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.
 *
 * @로직
 * 투포인트 알고리즘 구현
 * 1. 정렬을 한다
 * 2. 비교해서 같으면 배열에 담고, 두 배열의 인덱스 앞으로 이동
 * 3. 다르면, 작은값이 인덱스 앞으로 이동
 */
// 내가 푼 방법
function solution(a, b) {
  let answer = a.filter((v) => b.includes(v));
  answer.sort((a, b) => a - b);
  return answer;
}

// 투 포인트 알고리즘
function solution(a, b) {
  let answer = [];
  let p1 = (p2 = 0);
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  const n = a.length;
  const m = b.length;

  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else if (a[p1] > b[p2]) p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

console.log(solution(a, b));
