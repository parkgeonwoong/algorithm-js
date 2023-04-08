function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let chk = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push([...temp]);
    }
    //
    else {
      for (let i = 0; i < n; i++) {
        if (chk[i] === 0) {
          chk[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          chk[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
