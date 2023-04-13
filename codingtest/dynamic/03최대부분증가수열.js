/**
 * N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는(작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램을 작성하라.
 * 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면
 * 2, 5, 6, 7, 12를 뽑아내어 길이가 5인 최대 부분 증가수열을 만들 수 있다.
 *
 * @생각
 * - arr와 같은 배열 dy(최대 길이 담는 배열) 만듬
 * - 시작은 무조건 1개
 * - 순서대로 순회하면서 비교 -> for ++
 * - 선택된 배열 중 원소하나에서 뒤로 순회하면서 몇개 만들수 있을지 생각 -> for j--
 * - 더 크다면 최대길이 + 1
 *
 */

function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }

  return answer;
}
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
