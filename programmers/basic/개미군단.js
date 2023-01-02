/**
 * @desc : 개미군단
 */

// 내가 푼 방법
function solution(hp) {
  let answer = 0;
  let att = [5, 3, 1];

  while (hp > 0) {
    if (hp - att[0] >= 0) {
      hp -= att[0];
      answer += 1;
      continue;
    } else if (hp - att[1] >= 0) {
      hp -= att[1];
      answer += 1;
      continue;
    } else if (hp - att[2] >= 0) {
      hp -= att[2];
      answer += 1;
      continue;
    }
  }

  return answer;
}

solution(23);

// 다른 사람 풀이
const solution2 = (hp) => {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
};

solution2(24);
