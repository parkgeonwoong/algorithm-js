/**
 * @desc : 최빈값 구하기
 * @param {*} array
 * @returns
 */

function solution(array) {
  const cnt = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  console.log("1.cnt", cnt); // { '1': 1, '2': 1, '3': 4, '4': 1 }

  const items = Object.keys(cnt)
    .map((key) => [Number(key), cnt[key]])
    .sort((a, b) => b[1] - a[1]);

  console.log("2.items", items); // [ [ 3, 4 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]

  // undefined 때문에 ?. 추가
  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
}

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

// 또 다른 풀이 -> 틀림
function solution1(array) {
  let answer = [];
  if (array.length === 1) return array[0];

  array.forEach((item) => {
    if (answer[0] === undefined) answer[0] = 0;
    if (answer[item] === undefined) {
      answer[item] = 1;
    } else answer[item] += 1;
  });

  let max = Math.max(...answer);
  let maxIndex = answer.indexOf(max);

  let copy = [...answer];

  copy.sort((a, b) => b - a);

  if (copy[0] === copy[1]) return -1;
  else return maxIndex;
}

// 다른 사람 풀이
function solution2(array) {
  let map = new Map();

  // Map 객체 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  console.log(map);

  // Map 객체의 value만 모아서 배열로 만든다
  let arr = Array.from(map.values());
  console.log(arr);

  // 최대값 산출
  let max = Math.max(...arr);

  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
    return -1;
  } else {
    return arr.indexOf(max);
  }
}
