/**
 * @desc : 내가 푼 방식
 * - 일일이 순회를 하여 합을 찾는 방식
 * @TODO:
 * - 다른 방식이 존재할 것 같은데, 어떤 방식이 있을까?
 */

function solution(num, total) {
  let answer = [];

  // 합이 0이면, 0을 기준으로 배열을 만든다.
  if (total === 0) {
    return Array.from({ length: num }, (_, idx) => -Math.floor(num / 2) + idx);
  }

  // 일일이 찾아서 합을 찾는 방식
  for (let i = -total; i <= total; i++) {
    let sum = 0;
    for (let j = i; j < num + i; j++) {
      sum += j;
    }

    if (sum === total) {
      answer = Array.from({ length: num }, (_, idx) => i + idx);
      break;
    }
  }

  console.log("answer :", answer);

  return answer;
}

/**
 * @desc : 수학적 참고
 * - 연속된 수의 합은, (시작값 + 끝값) * 개수 / 2
 * - 등차수열로 차이가 1이고, 여기서는 연속된 수, 합이 나와있다.
 */

function solution(num, total) {
  let answer = [];
  const start = ((2 * total) / num - num + 1) / 2;

  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}
