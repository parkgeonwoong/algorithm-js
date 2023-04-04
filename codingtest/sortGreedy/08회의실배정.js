/**
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다.
 * 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 *
 * @설명
 * 전형적인 `그리드` 문제
 *
 * 어떻게 접근하는가?
 * 최적의 해를 구하는 것은 끝나는 시간이 짧은 순서대로 정렬 → 같은 경우 때문에 아니면 시작시간도 정렬
 *
 */

// 내가 푼 방법
function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;
    let end = arr[i][1];

    for (let j = i + 1; j < arr.length; j++) {
      if (end <= arr[j][0]) {
        cnt++;
        end = arr[j][1];
      }
    }
    answer = Math.max(cnt, answer);
  }

  return answer;
}

// 그리드로 접근하는 방식
function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let end = 0;

  for (let x of arr) {
    if (end <= x[0]) {
      end = x[1];
      answer++;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
