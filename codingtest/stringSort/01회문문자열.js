/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다
 *
 * @내가푼방법
 * - 일일이 다 짤라서 새로운 값과 기존과 비교
 *
 * @다른방법
 * 1. 중간까지만 잘라서 비교해도 되지 않을까? length / 2
 * 2. reverse
 */

// 내가 푼 방법
function solution(str) {
  const arr = [];
  str = str.toLowerCase();

  for (let i = str.length - 1; i >= 0; i--) {
    let word = [...str].splice(i, 1).join();
    arr.push(word);
  }

  if (arr.join("") === str) return "YES";
  else return "NO";
}

// 다른 방법 1.
function solution(str) {
  str = str.toLowerCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return "NO";
  }

  return "YES";
}

// 다른 방법 2.
function solution(str) {
  str = str.toLowerCase();

  if (str.split("").reverse().join("") !== str) return "NO";

  return "YES";
}

let str = "gooG";

console.log(solution(str));
