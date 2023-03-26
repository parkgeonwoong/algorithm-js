/**
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 * 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 *
 * @방법
 * 1. 문자화 시켜서 되돌리고 다시 숫자형으로 하는법
 * 2. 숫자 자체로 몫과 나머지로 계산
 */

function solution(arr) {
  let answer = [];

  // 1. 숫자 뒤집기
  for (let x of arr) {
    const reverseX = Number(x.toString().split("").reverse().join(""));

    // 2. 소수 판별
    if (isPrime(reverseX)) answer.push(reverseX);
  }

  return answer;
}

function isPrime(N) {
  // 1은 소수가 아니다.
  if (N === 1) return false;

  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
}

/**
 * 숫자자체에서 몫과 나머지로 계산해보기
 */

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
