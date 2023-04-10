/**
 * 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
 */

function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);

  function DFS(Level, start) {
    if (Level === m) {
      answer.push([...temp]);
    }
    //
    else {
      for (let i = start; i <= n; i++) {
        temp[Level] = i;
        DFS(Level + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
