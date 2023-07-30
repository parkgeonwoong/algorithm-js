function solution(N, stages) {
  let obj = {};

  for (let i = 1; i <= N; i++) {
    const count = stages.filter((v) => v === i).length;
    const failRate = count / stages.filter((v) => v >= i).length || 0;
    obj[i] = failRate;
  }

  return Object.entries(obj)
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]))
    .map((v) => +v[0]);
}

function solution(N, stages) {
  let nCnt = 0; // ~N번째 스테이지
  let obj = new Object();

  // N번
  for (let i = 0; i < N; i++) {
    let count = 0;
    stages = stages.filter((v) => v !== nCnt); // 스테이지에 맞는 배열
    nCnt++;

    for (let x of stages) {
      if (x === nCnt) {
        count++;
      }
    }
    obj[nCnt] = count / stages.length;
  }

  return Object.entries(obj)
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]))
    .map((v) => +v[0]);
}
