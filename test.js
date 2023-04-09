function solution(n, c) {
  let answer = 0;

  function DFS(n, c) {
    if (c === 1 || n - c === 1) return n;

    if (n === 1 || n === c) {
      return 1;
    } else {
      return DFS(n - 1, c - 1) + DFS(n - 1, c);
    }
  }

  answer = DFS(n, c);

  return answer;
}

console.log(solution(33, 19));
