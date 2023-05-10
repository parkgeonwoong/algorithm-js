/**
 * 다른 사람들의 풀이가 경이로워서 작성
 */

// 내가 푼 방식
function solution(s) {
  let answer = true;
  let str = s.toUpperCase();
  let p = (y = 0);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "P") p++;
    if (str[i] === "Y") y++;
  }

  if (p !== y) return false;
  return answer;
}

// split
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// reduce
function solution(s) {
  return [...s.toUpperCase()].reduce((acc, cur) => {
    if (cur === "P") return acc + 1;
    else if (cur === "Y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
