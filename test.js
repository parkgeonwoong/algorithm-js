/**
 * 투포인트 사용
 * 한 배열에서 인덱스 2개로 갖고 노는것
 * left, right로 조절해보자
 * right는 계속 움직임  m === sum answer++
 * m > sum right++
 * m < sum -> sum - left -> 반복될 수 있음 while -> 안에서 같으면? 11124 2+4 그러면 m === sum
 * 빼고 비교 뺴고 비교
 */

function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (m === sum) answer++;

    while (sum >= m) {
      sum -= arr[left++];
      if (m === sum) answer++;
    }
  }

  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, arr));
