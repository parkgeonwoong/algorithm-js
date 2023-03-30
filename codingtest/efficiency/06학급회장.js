/**
 * 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
 * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
 * 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
 * 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
 *
 * @푼방법
 * - 객체를 만들어서 (중복이 안되니까) 추가해주는 방식
 * key값을 가져오는 방식
 * 1. for ..in 키를 가지고 옴
 * 2. Object.keys().reduce() 사용
 *
 * @다른방식
 * - Map을 사용한 객체
 * for (let [key, value] of map)
 */

// 내가 푼 방법
function solution(str) {
  let answer = "";
  const obj = {};
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of str) {
    obj[x] = obj[x] + 1 || 1;
  }

  for (let x in obj) {
    if (obj[x] > max) {
      max = obj[x];
      answer = x;
    }
  }

  // console.log(Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b)));

  return answer;
}

// Map 구현
function solution(str) {
  let answer = "";
  let map = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of str) {
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      map.set(x, map.get(x) + 1);
    }
  }

  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";

console.log(solution(str));
