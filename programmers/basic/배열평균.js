/**
 * @desc : 배열의 평균값
 * @param {2} numbers
 * @returns
 */

function solution(numbers) {
  let sum = numbers.reduce((curr, prev) => (curr += prev));

  let avg = (sum / numbers.length).toFixed(1);

  let sosu = avg % 1;

  if (sosu === 0.5 || sosu === 0) {
    return avg;
  }
}
