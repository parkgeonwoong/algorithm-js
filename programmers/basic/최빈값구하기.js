/**
 * @desc : 최빈값 구하기
 * @param {*} array
 * @returns
 */

function solution(array) {
  let answer = [];

  // 1. 배열의 길이가 1이면 그대로 리턴
  if (array.length === 1) return array[0];

  let obj = {};

  // 2. 배열의 요소를 객체의 key로, value는 1로 초기화
  array.forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
  });

  // let obj = array.reduce((prev, curr) => {
  //   prev[curr] = prev[curr] + 1 || 1;
  //   return prev;
  // }, {});

  // 3. 객체를 배열로 변환
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }

  // 4. 배열을 value를 기준으로 내림차순 정렬
  answer.sort((a, b) => b[1] - a[1]);

  // 5. 배열의 첫번째 요소의 value가 두번째 요소의 value와 같으면 -1 리턴
  if (answer[0][1] === answer[1][1]) return -1;

  return Number(answer[0][0]);
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
