const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(n) {
  const answer = [];
  const visited = Array.from({ length: n + 1 }, () => false);
  const temp = [];

  function DFS(L) {
    if (L === n) {
      answer.push([...temp].join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(i);
        DFS(L + 1);
        visited[i] = false;
        temp.pop();
      }
    }
  }

  DFS(0);
  return answer.join("\n");
}

console.log(solution(input));
