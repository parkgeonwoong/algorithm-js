/**
 * 1439
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

console.log(input);

function solution(input) {
  const arr0 = []; // 연속된 0담는 배열
  const arr1 = []; // 연속된 1담는 배열

  let s = [...input, ""];
  let temp = "";

  for (let i = 0; i < s.length - 1; i++) {
    temp += s[i]; // [fix] 중복되서 요약한 것
    if (s[i] !== s[i + 1]) {
      s[i] === "0" ? arr0.push(temp) : arr1.push(temp);
      temp = "";
    }
  }

  return Math.min(arr0.length, arr1.length);
}

console.log(solution(input));
