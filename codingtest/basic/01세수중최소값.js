/**
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)
 *
 * @의도 : if문을 활용해라
 */

// 내가 푼 것
function solution(a, b, c) {
  let answer = [a, b, c];

  return Math.min(...answer);
}

// 남의 풀이
function solution(a, b, c) {
  let answer;

  a < b ? (answer = a) : (answer = c);
  if (c < answer) answer = c;
}

console.log(solution(2, 5, 1));
