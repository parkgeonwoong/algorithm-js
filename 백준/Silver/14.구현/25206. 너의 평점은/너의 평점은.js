const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const calculateGrade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

function solution(input) {
  let totalSum = 0;
  let totalGrade = 0;

  for (let x of input) {
    const [, grade, rate] = x.split(" ");
    if (rate === "P") continue;
    totalGrade += +grade;
    totalSum += +grade * calculateGrade[rate];
  }

  return (totalSum / totalGrade).toFixed(6);
}

console.log(solution(input));
