/**
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는
 * 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
 */

const arr = [25, 23, 11, 47, 53, 17, 33];
const arr2 = [12, 20, 54, 30, 87, 91, 30];

function solution(day, arr) {
  let answer = 0;

  for (let i of arr) {
    const result = String(i).slice(1, 2);
    if (day === Number(result)) answer += 1;
  }
  return answer;
}

// 다른사람 풀이
function solution(day, arr) {
  let answer = 0;

  for (let i of arr) {
    if (i % 10 === day) answer++;
  }
}

console.log(solution(0, arr2));
