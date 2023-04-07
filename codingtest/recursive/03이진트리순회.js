/**
 * 전위, 중위, 후위 순회연습
 *
 * - 스택 프레임을 그려서 작성
 */

function solution(v) {
  let answer;

  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); // 콘솔 위치에 따라 전위, 중위, 후위 -> 스택구조이기 때문에
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }

  DFS(v);
  return answer;
}

console.log(solution(1));
