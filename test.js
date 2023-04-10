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
