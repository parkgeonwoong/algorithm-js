function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  let flag = 0;

  function DFS(Level, sum) {
    if (flag) return;

    if (n === Level) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(Level + 1, sum + arr[Level]);
      DFS(Level + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(arr));
