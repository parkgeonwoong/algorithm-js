function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) temp += i + " ";
      }
      if (temp.length > 0) answer.push(temp.trim());
    }

    // 재귀
    else {
      check[v] = 1;
      DFS(v + 1);

      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
