function solution(sizes) {
  const dimension = sizes.map(([a, b]) => [Math.max(a, b), Math.min(a, b)]);
  const width = dimension.map(([w, _]) => w);
  const height = dimension.map(([_, h]) => h);

  return Math.max(...width) * Math.max(...height);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
