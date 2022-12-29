/**
 * @desc : 문자 반복 출력
 */

// 내가 푼 것
function solution(my_string, n) {
  let answer = [];

  let spl = my_string.split("");

  spl.forEach((item) => {
    for (let i = 0; i < n; i++) {
      answer.push(item);
    }
  });

  return answer.join("");
}

// 구조분해, map, repeat
function solution(my_string, n) {
  let answer = [...my_string].map((item) => item.repeat(n)).join("");
  return answer;
}

console.log(solution("hello", 3));
