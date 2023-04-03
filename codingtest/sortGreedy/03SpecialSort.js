/**
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 * 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
 */

// 내가 푼 방법
function solution(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 1; j < str.length - i; j++) {
      if (Math.sign(str[j]) === -1 && Math.sign(str[j - 1]) !== -1) {
        [str[j], str[j - 1]] = [str[j - 1], str[j]];
      }
    }
  }

  return str;
}

// 안바꾸고 그대로 버블정렬
function solution(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length - i - 1; j++) {
      if (str[j] > 0 && str[j + 1] < 0) {
        [str[j], str[j + 1]] = [str[j + 1], str[j]];
      }
    }
  }

  return str;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
