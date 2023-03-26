function solution(arr) {
  let answer = [];

  // 1. 숫자 뒤집기
  for (let x of arr) {
    let res = 0;
    while (x) {
      const t = x % 10;
      res = res * 10 + t;
      x = Math.floor(x / 10);
    }
    // 2. 소수 판별
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

function isPrime(N) {
  // 1은 소수가 아니다.
  if (N === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(N)); i++) {
    if (N % i === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
