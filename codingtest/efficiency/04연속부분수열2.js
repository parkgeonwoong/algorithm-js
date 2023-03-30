/**
 * N개의 수로 이루어진 수열이 주어집니다. 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 * 만약 N=5, M=5이고 수열이 다음과 같다. 1 3 1 2 3
 * 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
 */

function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    // j=0 1
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (m >= sum) answer++;
      else break;
    }
  }

  return answer;
}

function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    if (m >= arr[right] && right > 0 && right < arr.length - 1) answer++; // 1
    sum += arr[right];
    if (m >= sum) answer++;

    while (sum >= m) {
      sum -= arr[left++];
      if (m >= sum) answer++;
    }
  }

  return answer;
}

// 효율 투 포인트
function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
  }

  return answer;
}

let arr = [1, 3, 1, 2, 3];

console.log(solution(5, arr));
