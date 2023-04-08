function solution(n, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(Level, total) {
    if (total < 0) return;

    if (Level >= answer) return;

    if (total === 0) {
      console.log(Level);
      answer = Math.min(answer, Level);
      return;
    }
    //
    else {
      for (let x of n) {
        DFS(Level + 1, total - x);
      }
    }
  }

  DFS(0, m);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(arr, 15));
