const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

/**
 * 문제: 정렬하고 자기보다 작은 수 갯수만큼 표기
 * 접근:
 * 1. 중복제거 (set) 배열화시키고 정렬
 * 2. 인덱스가 작은수 갯수임
 * 3. 오브젝트에 (key, value)로 값 넣어줌
 */

function solution(input) {
  const [[n], [...arr]] = input;
  const answer = [];
  const set = Array.from(new Set([...arr])).sort((a, b) => a - b);
  const obj = {};

  set.forEach((v, index) => (obj[v] = index));

  for (let i = 0; i < n; i++) {
    answer.push(obj[arr[i]]);
  }
  return answer.join("\n");
}

console.log(solution(input));
