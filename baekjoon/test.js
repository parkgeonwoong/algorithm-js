const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(x) {
  function dfs(length, x, cnt) {
    if (x <= 0) return cnt;
    if (length > x) {
      dfs(length / 2, x, cnt);
    } else {
      dfs(length, x - length, cnt + 1);
    }
  }

  return dfs(64, x, 1);
}

console.log(solution(input));
