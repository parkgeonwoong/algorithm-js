/**
 * @desc : 구슬을 나누는 경우의 수
 */

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function solution(balls, share) {
  if (balls === share) return 1;

  return Math.floor(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

solution(5, 3);
