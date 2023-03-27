function solution(arr) {
  let answer = 0;
  const m = arr.length;
  const n = arr[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      for (let k = 0; k < m; k++) {
        let mento = 0;
        let mentee = 0;

        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) mento = s;
          if (arr[k][s] === j) mentee = s;
        }

        if (mento < mentee) cnt++;
      }

      if (cnt === m) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
