const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [[n, m], [...arr]] = input;
  const answer = [];
  const visited = Array.from({ length: n + 1 }, () => false);
  let temp = [];

  arr.sort((a, b) => a - b);

  const includesArray = (arr, target) => {
    return arr.some((innerArr) => {
      if (innerArr.length === target.length) {
        return innerArr.every((value, index) => value === target[index]);
      }
      return false;
    });
  };

  function DFS(L) {
    if (L === m) {
      if (includesArray(answer, temp)) {
        return;
      }
      answer.push([...temp]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(arr[i]);
        DFS(L + 1);
        temp.pop();
        visited[i] = false;
      }
    }
  }

  DFS(0);
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
