/**
 * @desc : 특정 문자 제거
 */

// 내가 푼 것
function solution(my_string, letter) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) answer += my_string[i];
  }

  return answer;
}

console.log(solution("BCBdbe", "B"));

// 다른 풀이
function solution(my_string, letter) {
  let answer = my_string.split(letter).join("");
  return answer;
}
