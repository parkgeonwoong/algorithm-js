function solution(m, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) sum += arr[i];
  answer = sum;

  for (let i = m; i < arr.length; i++) {
    sum += arr[i] - arr[i - m];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, a));
