/**
 * 효율성 -> 에라토스테네스 체
 */

function solution(n) {
  let answer = 0;
  const arr = Array.from({ length: n + 1 }, () => true); // 모두 소수라고 가정

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === false) {
      continue;
    }

    // 합성수 2는 소수이므로 4는 소수가 아니다.
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }

  // 2부터 0,1은 세지않음
  for (let i = 2; i <= n; i++) {
    if (arr[i]) answer++;
  }
  return answer;
}
