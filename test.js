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
