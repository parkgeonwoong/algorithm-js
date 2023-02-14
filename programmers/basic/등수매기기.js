// NOTE: 내가 푼 방법

function solution(score) {
  let answer = [];
  let avg = [];

  // 1. 각 학생의 평균 점수를 구한다.
  score.map((v) => avg.push((v[0] + v[1]) / 2));

  console.log("avg", avg);

  // 2. 평균 점수를 기준으로 기본 배열에서 등수를 매긴다.
  // 공동일 경우 다음 등수로 같게 한다.
  for (let i = 0; i < avg.length; i++) {
    let rank = 1;
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) {
        rank++;
      }
    }
    answer.push(rank);
  }

  console.log("answer", answer);

  return answer;
}

// NOTE: 리팩토링
function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  return avg.map((val, i) => {
    return avg.filter((avg) => avg > val).length + 1;
  });
}

// NOTE: 다른 사람의 풀이
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);

  return avg.map((v) => sorted.indexOf(v) + 1);
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
