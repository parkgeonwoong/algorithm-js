/**
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
 * 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
 * 1 2 3 4 5
 * 1 2 5
 * 1 3 4 2 5
 * 1 3 4 5
 * 1 4 2 5
 * 1 4 5
 * 총 6 가지입니다.
 *
 * @생각
 * 1. 변수
 * - 그래프 문제니까 그래프 그리기 0으로 초기화
 * - 방문경로 체크 확인
 * - 주어진 경로에서 구조분해할당해서 그래프 1로 표시
 *
 * 2. 재귀함수
 * - 매개변수는 정점 v (1부터 시작)
 * - if n === v
 * - 정점마다 경로를 가야하니까 순회 for문
 * - 방문하면 체크, 재귀함수 백트레킹할 경우 chk 해제
 *
 */

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 그래프 만들기
  let chk = Array.from({ length: n + 1 }, () => 0); // 갔던 경로 확인
  let path = []; // 경로 값

  // graph 표시
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    }
    //
    else {
      // 그래프 순회
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && chk[i] === 0) {
          console.log(v, i);
          chk[i] = 1;
          path.push(i);
          DFS(i);
          chk[i] = 0;
          path.pop();
        }
      }
    }
  }

  chk[1] = 1;
  path.push(1);
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
