/**
 * 1789
 *
 * 접근법
 * - 연속되는 갯수가 최대가 되게 수열들의 합으로 구함 -> while -> 효율이 별로 인것 같다
 *
 * FIXME:
 * - 연속되는 수열 -> 정렬이 되어있다 -> 이진탐색 접근해보자
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(input) {
  let n = input;
  let i = 1;
  let sum = 0;

  while (true) {
    sum += i;
    if (n < sum) {
      sum -= i--;
      break;
    } else if (n === sum) {
      break;
    }
    i++;
  }
  return i;
}

console.log(solution(input));

// 이진탐색
function solution(input) {
  let sum = 0;
  let left = 1;
  let right = input;

  // 연속되는 수열의 합 = 가우스 공식 : n*(n+1)/2 = input
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * (mid + 1) <= 2 * input) {
      sum = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return sum;
}
