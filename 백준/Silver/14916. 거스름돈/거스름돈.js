const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(n) {
  const coin = [2, 5]; // 거스름돈
  const MAXVALUE = 100000;
  const memo = Array.from({ length: n + 1 }, () => MAXVALUE); // 0~n개
  memo[0] = 0;

  // [2, 5]
  for (let i = 0; i < coin.length; i++) {
    // j=동전갯수 2~n, 5~n
    for (let j = coin[i]; j <= n; j++) {
      memo[j] = Math.min(memo[j], memo[j - coin[i]] + 1); // 4 = 2원갯수의 +1
    }
  }

  return memo.map((v) => (v === MAXVALUE ? -1 : v))[n];
}

console.log(solution(input));