/**
 * 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
 * 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
 *
 * @푼방법
 * 1. 완전탐색으로 진행 N^2
 * 2. 투 포인트 알고리즘 N
 *
 * @참고
 * 1. 슬라이딩 윈도우 2N
 * - 미리 연속된 3일을 지정해서 큰틀을 이동하는 형식
 * - 앞으로 인덱스 증가시키면, 뒤의 인덱스 빼주면서 3개는 유지하는 형태
 */

// 내가 푼 방법
function solution(m, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < m + i; j++) {
      sum += arr[j];
    }
    if (sum > max) {
      max = sum;
      answer = max;
    }
  }

  return answer;
}

// 투포인트
function solution(m, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (right - left === m - 1) {
      if (sum > max) max = sum;

      while (right - left >= m - 1) {
        sum -= arr[left++];
      }
    }
    answer = max;
  }

  return answer;
}

// 슬라이딩 윈도우
function solution(m, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) sum += arr[i];
  answer = sum;

  for (let i = m; i < arr.length; i++) {
    sum += arr[i] - arr[i - m];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, a));
