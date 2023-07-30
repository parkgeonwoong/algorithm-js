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
  const chk = Array.from({ length: n }, () => 0);         // 중복되지 않게 체크 배열
  const answer = [];
  let temp = [];     // 각 만든 수열

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (chk[i] !== 1) {
          chk[i] = 1;
          temp.push(arr[i]);
          DFS(L + 1);
          chk[i] = 0;
          temp.pop();
        }
      }
    }
  }

  DFS(0);
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
