function solution(a, b) {
  let answer = "";

  const sortA = a.split("").sort().join("");
  const sortB = b.split("").sort().join("");

  sortA.includes(sortB) ? (answer = "YES") : (answer = "NO");

  return answer;
}
let a = "AbaAeCe";
let b = "baeeACA";

console.log(solution(a, b));

let c = "abaCC";
let d = "Caaab";

console.log(solution(c, d));
