/**
 * 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
 */

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

// 메모이제이션
function solution(n, r) {
  let answer = 0;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];

    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(33, 19));
