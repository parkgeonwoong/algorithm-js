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
