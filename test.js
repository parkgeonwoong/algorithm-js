let str = ["good", "time", "good", "time", "student"];

function solution(str) {
  let answer;

  answer = str.filter((v, i) => str.indexOf(v) === i);

  return answer.join(" ");
}

console.log(solution(str));
