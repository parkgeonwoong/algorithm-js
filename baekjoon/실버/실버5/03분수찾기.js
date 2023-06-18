/**
 * 1193
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function solution(n) {
  const arr = [];
  const copyN = n;
  let i = 0;

  // 주어진 입력의 구간 배열로 만들기
  while (n > 0) {
    i++;
    arr.push(i);
    n -= i;
  }

  // 배열에서 몇번째인지 구하기, 지그재그로 순서가 바뀜 (짝수, 홀수번호)
  const x = arr.reduce((a, b) => a + b, 0) - copyN;
  const left = i % 2 === 0 ? arr[arr.length - 1 - x] : arr[x];
  const right = i % 2 === 0 ? arr[x] : arr[arr.length - 1 - x];
  return `${left}/${right}`;
}
console.log(solution(input));
