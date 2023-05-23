const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function solution(n) {
  let memo = [0, 1];

  const fibo = (num) => {
    if (memo[num] !== undefined) return memo[num];

    memo[num] = fibo(num - 1) + fibo(num - 2);
    return memo[num];
  };
  return fibo(n);
}

console.log(solution(input));
