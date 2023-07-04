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