const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [N, K] = input;
  const memo = Array.from({ length: N + 1 }, () => true); // 메모이제이션 모두 소수라고 가정
  let cnt = 0;
  let answer = 0;

  // 에라토스테네스의 체
  for (let i = 2; i <= N; i++) {
    if (memo[i] === false) continue;

    for (let j = i; j <= N; j += i) {
      if (memo[j] === false) continue;
      memo[j] = false;
      cnt++;
      if (cnt === K) answer = j;
    }
  }
  return answer;
}

console.log(solution(input));
