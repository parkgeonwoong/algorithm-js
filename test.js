function solution(n) {
  // let str = [...String(n)];
  // let answer = str.reduce((acc, cur) => (acc) + parseInt(cur), 0);
  // return answer;

  let str = String(n).split("");
  let answer = 0;
  str.forEach((item) => (answer += parseInt(item)));
  return answer;
}

console.log(solution(930211));
