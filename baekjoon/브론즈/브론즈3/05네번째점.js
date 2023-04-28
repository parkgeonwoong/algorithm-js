/**
 * 3009
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(n) {
  let answer = [];
  let x = [];
  let y = [];
  for (let i of n) {
    x.push(i[0]);
    y.push(i[1]);
  }

  let objX = new Object();
  let objY = new Object();

  for (let i = 0; i < x.length; i++) {
    objX[x[i]] = objX[x[i]] + 1 || 1;
    objY[y[i]] = objY[y[i]] + 1 || 1;
  }

  for (let key in objX) if (objX[key] !== 2) answer.push(parseInt(key));
  for (let key in objY) if (objY[key] !== 2) answer.push(parseInt(key));

  return answer.join(" ");
}
console.log(solution(input));
