/**
 * @desc : 아이스 아메리카노
 * 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열
 */

// 내가 푼 것
// 비효율적인 코드 같다고 느껴서 바꿔야겠다
function solution(money) {
  let answer = [];
  let left = money;

  for (let i = 0; i < 20; i++) {
    if (left / 5500 >= 1) {
      answer[0] = Math.floor(left / 5500);
      left = left % 5500;
    } else {
      if (answer[0] === undefined) answer[0] = 0;
      answer[1] = left;
      break;
    }
  }

  return answer;
}

// while 풀기
function solution1(money) {
  let cnt = 0;
  while (money >= 5500) {
    money -= 5500;
    cnt++;
  }

  return [cnt, money];
}

// 값 나누고, 나머지만 구해보기
function solution2(money) {
  return [Math.floor(money / 5500), money % 5500];
}
