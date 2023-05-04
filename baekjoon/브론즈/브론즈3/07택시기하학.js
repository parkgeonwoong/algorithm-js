/**
 * 3053
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

const calculateArea = (rad) => {
  const PI = Math.PI;
  return rad * rad * PI;
};

const taxi = (rad) => {
  return rad * rad * 2;
};

function solution(n) {
  let answer = [];
  answer.push(calculateArea(n).toFixed(6));
  answer.push(taxi(n).toFixed(6));

  return answer.join("\n");
}
console.log(solution(input));

//1385.442360
// 882.000000
