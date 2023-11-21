const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [n, m] = input;
  const arr = Array.from({ length: n }, (_, i) => i + 1); // 1~N 배열
  const visited = Array.from({ length: n }, () => false); // 중복되지 않게 체크 배열
  const answer = [];
  let temp = []; // 각 만든 수열

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(arr[i]);
        DFS(L + 1);
        visited[i] = false;
        temp.pop();
      }
    }
  }

  DFS(0);
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
