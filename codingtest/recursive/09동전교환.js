/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있다.
 */

function solution(n, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(Level, total) {
    if (total < 0) return; // 예외처리: 값에 맞게 안떨어져서 무한으로 재귀호출

    if (Level >= answer) return; // 예외처리: 이미 작은값을 찾았는데 트리에서 더 많은 동전수로 갈 필요가 없지 않을까?

    if (total === 0) {
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
