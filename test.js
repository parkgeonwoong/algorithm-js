/**
 * 이분탐색을 사용하려고 한다
 * 범위 산정 (left, right) -> 가장큰값부터 ~ 총합전까지
 * mid를 기준으로 담아놓기 위함
 * 갯수 <= m 더 크다는 소리니까 right = mid - 1
 * else left = mid +1
 *
 *
 */

const count = (songs, mid) => {
  let sum = 0;
  let cnt = 1;

  for (let x of songs) {
    if (sum + x > mid) {
      cnt++;
      sum = x;
    } else sum += x;
  }

  return cnt;
};

function solution(m, songs) {
  let answer;
  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b, 0);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else left = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
