/**
 * 2747
 * 재귀함수로 구현하니 '시간초과'
 * 메모제이션을 사용하는 방식으로 생각
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

function solution(n) {
  return fibo(n);
}

// 메모이제이션
function solution(n) {
  let memo = [0, 1];

  const fibo = (num) => {
    if (memo[num] !== undefined) return memo[num];

    memo[num] = fibo(num - 1) + fibo(num - 2);
    return memo[num];
  };
  return fibo(n);
}

console.log(solution(input));
