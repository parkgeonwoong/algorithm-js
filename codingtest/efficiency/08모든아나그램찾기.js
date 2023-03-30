/**
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 *
 * @푼방법
 * - 이중 for문으로 진행 하지만 n^2
 *
 * @다른방식
 * - map, 투 포인트, 슬라이딩 기법 사용
 * 한번만 순회로 끝난다. n
 */

// 내가 푼 방법
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    let temp = [];

    for (let j = i; j < i + b.length; j++) {
      temp.push(a[j]);
    }
    if (temp.sort().join("") === b) answer++;
  }

  return answer;
}

// Map, 투 포인트, 슬라이딩 기법 응용
function solution(a, b) {
  let answer = 0;
  let left = 0;
  let map1 = new Map();
  let map2 = new Map();

  // 주어진 문자열 map2
  for (let x of b) {
    if (!map2.has(x)) map2.set(x, 1);
    else map2.set(x, map2.get(x) + 1);
  }

  // 구해야하는 문자열 map1
  // 슬라이딩 윈도우 초기값
  for (let i = 0; i < b.length - 1; i++) {
    if (!map1.has(a[i])) map1.set(a[i], 1);
    else map1.set(a[i], map1.get(a[i]) + 1);
  }

  // 구해야하는 문자열 순회 -> 투 포인트
  for (let right = b.length - 1; right < a.length; right++) {
    if (!map1.has(a[right])) map1.set(a[right], 1);
    else map1.set(a[right], map1.get(a[right]) + 1);

    if (compareMap(map1, map2)) {
      answer++;
    }

    map1.set(a[left], map1.get(a[left]) - 1);
    if (map1.get(a[left]) === 0) {
      map1.delete(a[left]);
    }
    left++;
  }

  return answer;
}

function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map2) {
    if (!map1.has(key) || map1.get(key) !== value) {
      return false;
    }
  }

  return true;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
