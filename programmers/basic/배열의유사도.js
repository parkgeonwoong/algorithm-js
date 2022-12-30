/**
 * @desc : 배열의 유사도
 */

// 내가 푼 것
function solution(s1, s2) {
  let answer = 0;

  s1.forEach((item) => {
    if (s2.includes(item)) answer++;
  });

  return answer;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));

// 생각해봐야 할 것 -> filter
function solution2(s1, s2) {
  let answer = 0;

  s1.filter((item) => s2.includes(item) && answer++);

  return answer;
}
