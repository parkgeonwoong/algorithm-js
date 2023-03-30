/**
 * N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면 1 3 1 2 3
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3},
{1, 3, 1}로 총 10가지입니다.

- 순회돌고
m < item 이하 1개씩, 2개씩, 3개씩...

 */

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
