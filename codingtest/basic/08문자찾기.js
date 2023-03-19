/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 *
 * @내가푼방법
 * - 문자열을 순회하면서 === 찾을려는 문자 +1
 *
 * @생각
 * - 찾을려는 것을 분리한다고 생각해보자
 * - split(특정문자) 길이의 -1
 */

let str = "COMPUTERPROGRAMMING";

function solution(str, t) {
  let answer = 0;

  for (let i of str) {
    if (i === t) answer++;
  }

  console.log(answer);
  return answer;
}

// 생각
function solution(str, t) {
  let sp = str.split(t);
  console.log(sp.length - 1);
}

solution(str, "R");
