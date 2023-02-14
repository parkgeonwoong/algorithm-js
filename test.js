function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);

  console.log("avg", avg);
  console.log("sorted", sorted);

  avg.map((v) => console.log(sorted.indexOf(v) + 1));

  return avg.map((v) => sorted.indexOf(v) + 1);
}

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
