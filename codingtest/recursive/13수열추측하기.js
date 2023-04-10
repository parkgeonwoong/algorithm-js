/**
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
 * 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
 * 3 1 2 4
 *  4 3 6
 *   7 9
 *    16
 * N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오.
 * 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
 *
 * @생각
 * 너무 어려운데?
 */

function solution(n, f) {
  let answer = [];
  let flag = 0;
  let dy = Array.from(Array(10), () => Array(10).fill(0));
  let combiTemp = Array.from({ length: n }, () => 0);
  let seqTemp = Array.from({ length: n }, () => 0);
  let seqChk = Array.from({ length: n + 1 }, () => 0);

  // 조합의 경우
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(Level, sum) {
    if (flag) return;

    if (Level === n && sum === f) {
      answer = [...seqTemp];
      flag = 1;
    }
    //
    else {
      for (let i = 1; i <= n; i++) {
        if (seqChk[i] === 0) {
          seqChk[i] = 1;
          seqTemp[Level] = i;
          DFS(Level + 1, sum + seqTemp[Level] * combiTemp[Level]);
          seqChk[i] = 0;
        }
      }
    }
  }

  // 조합의 배열 담기
  for (let i = 0; i < n; i++) {
    combiTemp[i] = combi(n - 1, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
