/**
 * 1. 3명이 어떤한 수열로 반복함으로 배열로 만듬
 * 2. 한명마다 맞은 갯수를 카운트 해줌
 * 3. 숫자를 넘어가면 반복해줘야 하기 때문에 정답의 인덱스에서 % 길이만큼 나누고 나머지값으로 값을 구함
 * 4. 가장 높은 숫자에서 겹치면 다 같이 return 해줘야함
 *
 * FIXME:
 * - for문이 반복되면서 가독성이 좋지 못함
 */

const s = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const answer = [];
  const countArr = [];

  for (let i = 0; i < 3; i++) {
    let cnt = 0;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === s[i][j % s[i].length]) cnt++;
    }
    countArr.push(cnt);
  }

  const max = Math.max(...countArr);
  for (let i = 0; i < countArr.length; i++) {
    if (max === countArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

// FIXME:
function solution(answers) {
  const countArr = s.map((pattern) => {
    return answers.reduce((count, answer, index) => {
      if (answer === pattern[index % pattern.length]) {
        count++;
      }
      return count;
    }, 0);
  });

  const maxNumber = Math.max(...countArr);
  const answer = countArr.reduce((result, count, index) => {
    if (count === maxNumber) {
      result.push(index + 1);
    }
    return result;
  }, []);
  return answer;
}
