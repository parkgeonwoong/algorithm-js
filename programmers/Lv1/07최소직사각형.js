/**
 * 지갑은 가로, 세로 바꿀수 있다 -> 기준을 삼아야 한다
 * 더 큰값 : 가로, 작은값: 세로
 */

function solution(sizes) {
  const width = [];
  const height = [];

  for (let x of sizes) {
    const [a, b] = x;
    if (a >= b) {
      width.push(a);
      height.push(b);
    } else {
      width.push(b);
      height.push(a);
    }
  }

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

// 리팩토링
function solution(sizes) {
  const dimension = sizes.map(([a, b]) => [Math.max(a, b), Math.min(a, b)]);
  const width = dimension.map(([w, _]) => w);
  const height = dimension.map(([_, h]) => h);

  return Math.max(...width) * Math.max(...height);
}
