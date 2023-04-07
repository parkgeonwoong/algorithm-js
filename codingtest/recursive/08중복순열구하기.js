/**
 * 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 */

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
