/**
 * 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
 * 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
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

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, a));
