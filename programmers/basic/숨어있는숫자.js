/**
 * @desc : 숨어있는 숫자
 * @param {} my_string
 * @returns
 */

// 내가 푼 방법
function solution(my_string) {
  let answer = 0;
  let arr = [...my_string];

  arr.forEach((item) => {
    if (!isNaN(item)) {
      answer += parseInt(item);
    }
  });

  return answer;
}

// 다른 사람 풀이
const solution2 = (my_string) => {
  let a = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  console.log(a);
};

solution2("aAb1B2cC34oOp");
