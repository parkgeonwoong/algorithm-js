const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[N, M], [...arr]] = input;
  let left = 0;
  let answer = 0;
  let sum = 0;

  // 투포인트
  for (let right = 0; right < N; right++) {
    sum += arr[right];
    if (sum === M) answer++;

    while (sum >= M) {
      sum -= arr[left++];
      if (sum === M) answer++;
    }
  }
  return answer;
}

console.log(solution(input));