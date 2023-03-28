function solution(a, b) {
  let answer = [];
  let p1 = (p2 = 0);
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  const n = a.length;
  const m = b.length;

  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else if (a[p1] > b[p2]) p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

console.log(solution(a, b));
