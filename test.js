function solution(c, arr) {
  let answer = 0;

  function DFS(Level, sum) {
    if (c < sum) return;
    if (Level === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(Level + 1, sum + arr[Level]);
      DFS(Level + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
