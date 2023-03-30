/**
 * Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 * 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면
 * A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
 * 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.
 *
 * @푼방법
 * sort는 nlogn 두번 → 2nlogn
 * 대신에 소스코드는 깔끔함
 *
 * @다른방식
 * 효율로만 따지면 2n
 * Map으로 구현
 */

// 내가 푼 방법
function solution(a, b) {
  let answer = "";

  const sortA = a.split("").sort().join("");
  const sortB = b.split("").sort().join("");

  sortA.includes(sortB) ? (answer = "YES") : (answer = "NO");

  return answer;
}

// Map 구현
function solution(a, b) {
  let answer = "YES";
  let map = new Map();

  // 문자열 하나 맵에 세팅
  for (let x of a) {
    if (!map.has(x)) map.set(x, 1);
    else map.set(x, map.get(x) + 1);
  }

  // 다른 문자열 순회하면서
  // 1. 맵에 존재하는지
  // 2. 개수를 차감해서 0이 되는지
  for (let x of b) {
    if (!map.has(x) || map.get(x) === 0) {
      return "NO";
    }
    map.set(x, map.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";

console.log(solution(a, b));

let c = "abaCC";
let d = "Caaab";

console.log(solution(c, d));
