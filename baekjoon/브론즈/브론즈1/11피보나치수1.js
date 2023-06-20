/**
 * 24416
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function solution(input) {
  let cntRe = 0;
  let cntDp = 0;

  const fiboRe = (n) => {
    if (n <= 2) {
      cntRe++;
      return 1;
    } else fiboRe(n - 1) + fiboRe(n - 2);
    return cntRe;
  };

  const fiboDp = (n) => {
    const memo = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      cntDp++;
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    return cntDp;
  };

  return [fiboRe(input), fiboDp(input)].join(" ");
}
console.log(solution(input));
