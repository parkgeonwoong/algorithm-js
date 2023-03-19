/**
 * 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
 * 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 *
 * @실패한원인
 * - 처음에는 조건문으로만 승부를 봤다. 값의 합에 비교연산 → 실패, 불필요한 계산
 *
 * @로직
 * - 전체 합과 배열을 구함
 * - 완전탐색으로 2개를 빼고 (전체 합 - 2개합) === 100
 * - 조건에 맞으면 배열에서 자른다.
 */

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  let sum = arr.reduce((acc, v) => acc + v, 0);
  let answer = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(arr); // 20 7 23 19 10 8 13
console.log();
