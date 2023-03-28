/**
 * N개의 수로 이루어진 수열이 주어집니다. 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 * 만약 N=8, M=6이고 수열이 다음과 같다면 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 *
 * @내가푼방법
 * - 이중 for문으로 값이 되면 중단하는 방식 (n^2)
 *
 * @투포인트
 * 한 배열에서 인덱스 2개로 갖고 노는것
 * - 배열 하나에 인덱스 left, right로 이동시킨다
 * - m보다 작으면 right++, m보다 크면 left값을 뺴주고 left++
 */

// 내가푼방법
function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (m === sum) {
        answer++;
        break;
      } else if (m < sum) break;
    }
  }

  return answer;
}

// 투 포인트
function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, arr));
