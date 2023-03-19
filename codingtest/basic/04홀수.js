/**
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 */

const arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  const result = arr.filter((i) => i % 2 === 1);
  const min = Math.min(...result);
  const sum = result.reduce((prev, cur) => prev + cur);

  return [sum, min];
}

console.log(solution(arr));
