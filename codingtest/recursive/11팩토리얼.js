/**
 * 자연수 N을 입력하면 N!값을 구하세요.
 */

function solution(n) {
  let answer = 0;

  function DFS(n) {
    if (n === 1) return 1;
    else {
      return n * DFS(n - 1);
    }
  }

  answer = DFS(n);

  return answer;
}

console.log(solution(5));
