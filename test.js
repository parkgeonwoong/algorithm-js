function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let left = 1;
  let right = stable[stable.length - 1];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
