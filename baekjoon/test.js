const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().split("\n");

console.log(input);

const t = input.filter((str) => str.length < 1);

if (t.length) {
  input.splice(input.indexOf(t[0]), 1);
}

function solution(input) {
  const answer = [];

  for (let x of input) {
    const lower = (x.match(/[a-z]/g) || []).length;
    const upper = (x.match(/[A-Z]/g) || []).length;
    const num = (x.match(/[0-9]/g) || []).length;
    const space = (x.match(/\s/g) || []).length;
    answer.push([lower, upper, num, space]);
  }

  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
