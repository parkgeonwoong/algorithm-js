let str = "COMPUTERPROGRAMMING";

function solution(str, t) {
  let answer = 0;

  for (let i of str) {
    if (i === t) answer++;
  }

  console.log(answer);
  return answer;
}

function solution(str, t) {
  let sp = str.split(t);
  console.log(sp.length - 1);
}

solution(str, "R");
