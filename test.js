function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    let temp = [];

    for (let j = i; j < i + b.length; j++) {
      temp.push(a[j]);
    }
    if (temp.sort().join("") === b) answer++;
  }

  return answer;
}
let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
