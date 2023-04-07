function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);

  function DFS(Level) {
    if (Level === m) {
      answer.push([...temp]);
    }
    //
    else {
      for (let i = 1; i <= n; i++) {
        temp[Level] = i;
        DFS(Level + 1);
      }
    }
  }

  DFS(0);

  return [answer, answer.length];
}

console.log(solution(3, 2));
