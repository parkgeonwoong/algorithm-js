const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(input) {
  let sum = 0;
  let left = 1;
  let right = input;

  // 연속되는 수열의 합 = 가우스 공식 : n*(n+1)/2 = input
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * (mid + 1) <= 2 * input) {
      sum = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return sum;
}

console.log(solution(input));
