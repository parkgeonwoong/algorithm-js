/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는
 * 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.
 *
 * @NOTE:
 * 내가 푼 방법은 다시 똑같은 문자가 들어오면 못들어오는 문제 (틀렸음)
 *
 * ❓for문 시 s[i] === s[i+1] 비교하고 싶다면?
 * - 매개변수에 빈값 + " " 넣어주고, for문 i범위를 길이-1로 하면 됨
 */

function solution(str) {
  let answer = "";
  let cnt = 1;
  str = str + " "; // 📌핵심

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += cnt + "";
      cnt = 1;
    }
  }

  return answer;
}

// 틀림 (내가 푼 것 )
function solution(str) {
  let answer = [];
  let cnt = 1;

  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) {
      answer.push(str[i]);

      if (cnt > 1) {
        const temp = answer.pop();
        answer.push(cnt);
        answer.push(temp);
      }
      cnt = 1;
    } else cnt++;
  }

  return answer;
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
