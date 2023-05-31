function solution(number) {
  let answer = 0;
  let n = number.length;

  function DFS(L, total, start) {
    if (L > 3) return;
    if (L === 3) {
      answer += total === 0 ? 1 : 0;
    } else {
      for (let i = start; i < n; i++) {
        DFS(L + 1, total + number[i], i + 1);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
