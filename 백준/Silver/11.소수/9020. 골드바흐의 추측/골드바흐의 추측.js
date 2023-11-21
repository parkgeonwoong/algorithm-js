const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("\n").map(Number);

function solution(input) {
  const [T, ...arr] = input;
  const answer = [];

  // 1. 2~10000 에라토테네스의 체
  const prime = Array(10001).fill(true);
  prime[0] = false;
  prime[1] = false;

  for (let i = 2; i <= 10000; i++) {
    if (!prime[i]) continue;
    for (let j = i * 2; j <= 10000; j += i) {
      prime[j] = false;
    }
  }

  // 2. 테스트케이스 (골드바흐의 수)
  for (let x of arr) {
    // 골드바흐 파티션 = 둘 다 n/2일 때 차이가 0으로 가장 작으므로 초기화를 n/2
    let left = (right = x / 2);
    while (!prime[left] || !prime[right]) {
      left--;
      right++;
    }
    answer.push(`${left} ${right}`);
  }

  return answer.join("\n");
}

console.log(solution(input));
