/**
 * @desc : 제곱수 판별하기
 */

// 내가 푼 것
function solution(n) {
  let answer = 0;
  let arr = [];

  // 약수 구하기
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? arr.push(i) : null;
  }

  // 제곱근 구하기
  arr.filter((item) => {
    if (item * item === n) {
      answer = 1;
    }
  });

  answer === 0 ? (answer = 2) : null;

  return answer;
}

// Math.sqrt() 사용
const solution2 = (n) => {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
};

console.log(solution2(946));
