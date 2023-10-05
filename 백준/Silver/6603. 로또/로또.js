const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

input.pop();

function solution(input) {
  const answer = [];

  for (let x of input) {
    const [k, ...arr] = x;
    const visited = Array.from({ length: k }, () => false);
    const temp = [];

    function DFS(L) {
      if (temp.length === 6) {
        answer.push([...temp].join(" "));
        return;
      }

        // 조합
      for (let i = L; i < k; i++) {
        if (!visited[i]) {
          visited[i] = true;
          temp.push(arr[i]);
          DFS(i + 1);
          temp.pop();
          visited[i] = false;
        }
      }
    }

    DFS(0);
    answer.push(" ");
  }
  return answer.join("\n");
}

console.log(solution(input));
