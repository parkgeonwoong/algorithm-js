/**
 * 11557
 * 접근법
 * - 입력값을 분리하는 과정, 값을 구하는 과정으로 나눴다
 * - 입력값이 굉장히 까다로워서 하나하나 다 쪼개면서 진행
 * - 가장많이 소비하는 것도 쪼개면서 진행
 *
 * FIXME:
 * - 가장많이 술소비한 학교 선정하는 부분이 가독성이 안좋아서 수정이 필요하다고 느낌
 * - 코드도 길고, 시간도 오래걸림
 * - map으로 수정
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

// console.log(input);

function solution(input) {
  const answer = [];
  const result = [];
  const n = +input[0];
  const values = input.slice(1);

  // 1. 분리하는 과정
  for (let i = 0; i < n; i++) {
    const cnt = +values.splice(0, 1);
    const rest = values.splice(0, cnt);
    result.push(rest);
  }

  // 2. 가장많이 술소비 선정
  for (let x of result) {
    let max = Number.MIN_SAFE_INTEGER;
    let school = "";

    for (let i = 0; i < x.length; i++) {
      const S = x[i].split(" ")[0];
      const L = +x[i].split(" ")[1];
      if (max < L) {
        max = L;
        school = S;
      }
    }
    answer.push(school);
  }
  return answer.join("\n");
}

console.log(solution(input));

// FIXME:
function solution(input) {
  const answer = [];
  const result = [];
  const n = +input[0];
  const values = input.slice(1);

  // 1. 분리하는 과정
  for (let i = 0; i < n; i++) {
    const cnt = +values.splice(0, 1);
    const rest = values.splice(0, cnt);
    result.push(rest);
  }

  console.log(result);

  // 2. 가장많이 술소비 선정
  for (let x of result) {
    const temp = x.map((v) => v.split(" ")).sort((a, b) => +b[1] - +a[1]);
    answer.push(temp[0][0]);
  }
  return answer.join("\n");
}
